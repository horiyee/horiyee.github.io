import { Hono } from 'hono'
import { IndexPage } from './pages/IndexPage'

const app = new Hono()

app.get('/', (c) => c.html(<IndexPage />))

export default app
