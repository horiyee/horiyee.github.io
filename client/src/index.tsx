import { Hono } from 'hono'
import { About } from './pages/About'
import { Index } from './pages/Index'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))
app.get('/about/', (c) => c.html(<About />))

export default app
