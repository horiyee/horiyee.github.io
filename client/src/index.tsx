import { Hono } from 'hono'
import { Index } from './pages/Index'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))

export default app
