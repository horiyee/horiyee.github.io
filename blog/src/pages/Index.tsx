import type { FC } from 'hono/jsx'
import { Layout } from '../components/Layout'
import { listPosts } from '../lib/content'

export const Index: FC = () => {
  const posts = listPosts()

  return (
    <Layout>
      <hgroup>
        <h1>horiy blog</h1>
        <p>Notes and writings by Kaito Horiuchi</p>
      </hgroup>
      {posts.length === 0 ? (
        <p>Posts will appear here.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li>
              <time datetime={post.date}>{post.displayDate}</time>
              {' — '}
              <a href={post.href}>{post.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}
