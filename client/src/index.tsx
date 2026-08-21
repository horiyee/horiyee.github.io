import { Hono } from 'hono'
import { HomePage } from './pages/HomePage'

const app = new Hono()

app.get('/', (c) => c.html(<HomePage />))

export default app
