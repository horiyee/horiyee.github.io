import { Hono } from 'hono'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'

const app = new Hono()

app.get('/', (c) => c.html(<HomePage />))
app.get('/about/', (c) => c.html(<AboutPage />))

export default app
