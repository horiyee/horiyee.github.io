import { describe, expect, it } from 'vitest'
import app from '../src/index'

describe('app', () => {
  it('responds to /', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('堀内 凱登')
  })

  it('responds to /about/', async () => {
    const res = await app.request('/about/')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('About Me')
  })
})
