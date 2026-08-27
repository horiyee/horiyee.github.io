import { describe, expect, it } from 'vitest'
import app from '../src/index'

describe('app', () => {
  it('responds to /', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('horiy blog')
  })
})
