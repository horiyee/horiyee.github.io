export type EntryFrontmatter = {
  title: string
  date: string
}

export type ParsedMarkdown = {
  data: EntryFrontmatter
  body: string
}

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/

function parseFrontmatterBlock(block: string): EntryFrontmatter {
  const fields: Record<string, string> = {}

  for (const line of block.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z][A-Za-z0-9_]*)\s*:\s*(?:"([^"]*)"|'([^']*)'|(.+))\s*$/)
    if (!match) continue
    fields[match[1]] = (match[2] ?? match[3] ?? match[4]).trim()
  }

  if (!fields.title || !fields.date) {
    throw new Error('frontmatter requires title and date')
  }

  return {
    title: fields.title,
    date: fields.date,
  }
}

export function parseMarkdown(raw: string): ParsedMarkdown {
  const match = raw.match(frontmatterPattern)
  if (!match) {
    throw new Error('markdown must start with YAML frontmatter')
  }

  return {
    data: parseFrontmatterBlock(match[1]),
    body: match[2].trim(),
  }
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split('-')
  if (!year || !month || !day) return date
  return `${year}/${month}/${day}`
}
