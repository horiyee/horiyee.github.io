import { Hono } from 'hono'
import { getNote, getPost, listNotes, listPosts } from './lib/content'
import { EntryPage } from './pages/Entry'
import { Index } from './pages/Index'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))

for (const post of listPosts()) {
  app.get(post.href, (c) => c.html(<EntryPage entry={post} />))
}

for (const note of listNotes()) {
  app.get(note.href, (c) => c.html(<EntryPage entry={note} />))
}

app.get('/posts/:slug/', (c) => {
  const entry = getPost(c.req.param('slug'))
  if (!entry) return c.notFound()
  return c.html(<EntryPage entry={entry} />)
})

app.get('/notes/:slug/', (c) => {
  const entry = getNote(c.req.param('slug'))
  if (!entry) return c.notFound()
  return c.html(<EntryPage entry={entry} />)
})

export default app
