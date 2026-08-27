import { marked } from 'marked'
import { formatDate, parseMarkdown } from './markdown'

export type EntryKind = 'post' | 'note'

export type Entry = {
  kind: EntryKind
  slug: string
  title: string
  date: string
  displayDate: string
  href: string
  html: string
}

const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const noteModules = import.meta.glob('../content/notes/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.md$/, '')
}

function loadEntries(
  modules: Record<string, string>,
  kind: EntryKind,
): Entry[] {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = slugFromPath(path)
      const { data, body } = parseMarkdown(raw)
      const html = marked.parse(body, { async: false }) as string

      return {
        kind,
        slug,
        title: data.title,
        date: data.date,
        displayDate: formatDate(data.date),
        href: kind === 'post' ? `/posts/${slug}/` : `/notes/${slug}/`,
        html,
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

const posts = loadEntries(postModules, 'post')
const notes = loadEntries(noteModules, 'note')

export function listEntries(): Entry[] {
  return [...posts, ...notes].sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug),
  )
}

export function listPosts(): Entry[] {
  return posts
}

export function listNotes(): Entry[] {
  return notes
}

export function getPost(slug: string): Entry | undefined {
  return posts.find((entry) => entry.slug === slug)
}

export function getNote(slug: string): Entry | undefined {
  return notes.find((entry) => entry.slug === slug)
}
