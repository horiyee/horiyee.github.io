import { describe, expect, it } from 'vitest'
import { formatDate, parseMarkdown } from '../../lib/markdown'

describe('parseMarkdown', () => {
  it('title と date の frontmatter をパースする', () => {
    const parsed = parseMarkdown(`---
title: "Hello"
date: "2025-05-02"
---

Body text.
`)

    expect(parsed.data).toEqual({ title: 'Hello', date: '2025-05-02' })
    expect(parsed.body).toBe('Body text.')
  })

  it('frontmatter がない場合は例外を投げる', () => {
    expect(() => parseMarkdown('# Hello\n')).toThrow(
      'Markdown は YAML frontmatter で始まる必要があります',
    )
  })

  it('title または date がない場合は例外を投げる', () => {
    expect(() =>
      parseMarkdown(`---
title: "Hello"
---

Body text.
`),
    ).toThrow('frontmatter には title と date が必要です')
  })
})

describe('formatDate', () => {
  it('ISO 日付を YYYY/MM/DD に整形する', () => {
    expect(formatDate('2021-04-21')).toBe('2021/04/21')
  })
})
