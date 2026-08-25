export const site = {
  brand: 'horiyee',
  name: {
    ja: '堀内 凱登',
    en: 'Kaito Horiuchi',
  },
  tagline: 'Software Engineer',
  description: 'Portfolio of Kaito Horiuchi',
} as const

export const profile = {
  handle: 'ほり / hori / horiyee',
  hometown: '香川県',
  residence: '東京都',
} as const

export type SiteLink = {
  name: string
  description: string
  href: string
  external?: boolean
}

export const siteLinks: SiteLink[] = [
  {
    name: 'About',
    description: 'プロフィールと経歴',
    href: '/about/',
  },
  {
    name: 'Development',
    description: '開発・制作',
    href: 'https://horiylab.github.io',
    external: true,
  },
  {
    name: 'Technology',
    description: '技術スタック',
    href: 'https://horiylab.github.io',
    external: true,
  },
  {
    name: 'Blog',
    description: '技術ブログ',
    href: 'https://blog.horiy.dev',
    external: true,
  },
]

export type SnsLink = {
  name: string
  id: string
  url: string
}

export const sns: SnsLink[] = [
  {
    name: 'GitHub',
    id: 'horiyee',
    url: 'https://github.com/horiyee',
  },
  {
    name: 'X',
    id: 'horiy_dev',
    url: 'https://x.com/horiy_dev',
  },
  {
    name: 'Qiita',
    id: 'horiyee',
    url: 'https://qiita.com/horiyee',
  },
  {
    name: 'note',
    id: 'horiyee',
    url: 'https://note.com/horiyee',
  },
  {
    name: 'AtCoder',
    id: 'horiy0125',
    url: 'https://atcoder.jp/users/horiy0125',
  },
]
