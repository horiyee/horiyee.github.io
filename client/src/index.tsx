import { Hono } from 'hono'
import { Index } from './pages/Index'
import { AboutPage } from './pages/AboutPage'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))
app.get('/about/', (c) => c.html(<AboutPage />))

export default app
