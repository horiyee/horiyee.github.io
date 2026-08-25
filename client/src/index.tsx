import { Hono } from 'hono'
import { Index } from './pages/Index'
import { About } from './pages/About'

const app = new Hono()

app.get('/', (c) => c.html(<Index />))
app.get('/about/', (c) => c.html(<About />))

export default app
