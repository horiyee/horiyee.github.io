import { describe, expect, it } from 'vitest'
import app from '../index'

describe('app', () => {
  it('/ に応答する', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('horiy blog')
  })

  it('存在しない投稿は 404 を返す', async () => {
    const res = await app.request('/posts/does-not-exist/')
    expect(res.status).toBe(404)
  })
})
