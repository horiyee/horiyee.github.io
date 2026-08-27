import { marked } from 'marked'
import { formatDate, parseMarkdown } from './markdown'

export type Post = {
  slug: string
  title: string
  date: string
  displayDate: string
  href: string
  html: string
}

const postModules = import.meta.glob('../../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.md$/, '')
}

const posts = Object.entries(postModules)
  .map(([path, raw]) => {
    const slug = slugFromPath(path)
    const { data, body } = parseMarkdown(raw)
    const html = marked.parse(body, { async: false }) as string

    return {
      slug,
      title: data.title,
      date: data.date,
      displayDate: formatDate(data.date),
      href: `/posts/${slug}/`,
      html,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))

export function listPosts(): Post[] {
  return posts
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
