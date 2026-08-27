import { Hono } from 'hono'
import { getPost, listPosts } from './lib/content'
import { EntryPage } from './pages/Entry'
import { Index } from './pages/Index'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))

for (const post of listPosts()) {
  app.get(post.href, (c) => c.html(<EntryPage entry={post} />))
}

app.get('/posts/:slug/', (c) => {
  const post = getPost(c.req.param('slug'))
  if (!post) return c.notFound()
  return c.html(<EntryPage entry={post} />)
})

export default app
