import { describe, expect, it } from 'vitest'
import { formatDate, parseMarkdown } from './markdown'

describe('parseMarkdown', () => {
  it('parses title and date frontmatter', () => {
    const parsed = parseMarkdown(`---
title: "Hello"
date: "2025-05-02"
---

Body text.
`)

    expect(parsed.data).toEqual({ title: 'Hello', date: '2025-05-02' })
    expect(parsed.body).toBe('Body text.')
  })

  it('rejects markdown without frontmatter', () => {
    expect(() => parseMarkdown('# Hello\n')).toThrow(/frontmatter/)
  })
})

describe('formatDate', () => {
  it('formats ISO dates as YYYY/MM/DD', () => {
    expect(formatDate('2021-04-21')).toBe('2021/04/21')
  })
})
