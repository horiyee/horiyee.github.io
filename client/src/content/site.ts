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
  avatar: {
    src: '/images/avatar/me.jpg',
    alt: `${site.name.ja}（${site.name.en}）`,
  },
} as const

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

export type CareerEntry = {
  period: string
  org?: string
  team?: string
  role?: string
  headline?: string
  descriptions?: string[]
  link?: {
    href: string
    label: string
  }
}

export const career: CareerEntry[] = [
  {
    period: '2019.4',
    headline: '九州大学 経済学部 経済工学科 入学',
  },
  {
    period: '2019.10 – 2020.10',
    org: '株式会社クアンド',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Vue.js / Django による FA Web システム、TensorFlow / Keras による CNN モデル、React.js / Gatsby.js によるプロダクト・Web 開発。',
      'RevPi などを用いた FA システムのハードウェア面にも携わった。',
    ],
  },
  {
    period: '2020.11 – 2021.1',
    org: '株式会社Regnio',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Gatsby.js による自社 HP、WebView アプリ、Raspberry Pi クラスタ / k3s を用いた FA インフラ構築など。',
    ],
  },
  {
    period: '2021.2 – 2021.10',
    org: 'note株式会社',
    team: 'web1チーム（旧カイゼンチーム）',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Nuxt.js / Ruby on Rails による note のフロントエンド・サーバサイド開発。',
      'Next.js / Svelte によるフロントエンド App 分割などにも携わった。',
    ],
  },
  {
    period: '2021.3.27 – 2021.3.28',
    org: '株式会社サイバーエージェント',
    team: 'Webフロントエンド',
    role: '2days ハッカソン型インターン 3位入賞',
    descriptions: ['用意された API を使い、2 日間で EC サイトを開発。'],
    link: {
      href: 'https://www.k-hori.com/blog/posts/311ze4r8ztg3',
      label: 'ブログ記事',
    },
  },
  {
    period: '2021.8.9 – 2021.8.27',
    org: '株式会社VOYAGE GROUP',
    team: 'Treasure 2021',
    role: 'グランプリ・UI/UX 賞受賞',
    link: {
      href: 'https://www.k-hori.com/blog/posts/lsk8k8gpz',
      label: 'ブログ記事',
    },
  },
  {
    period: '2021.9.8',
    org: 'クックパッド株式会社',
    team: 'Cookpad Summer Internship 2021',
    role: '裏Techコース（1day）',
    descriptions: [
      'Next.js / Ruby on Rails アプリを題材に、GraphQL API を開発。',
    ],
  },
  {
    period: '2021.11.1 – 2021.12.9',
    org: 'クックパッド株式会社',
    team: '買物サービス開発部',
    role: 'エンジニア（就業型インターン）',
    descriptions: [
      'かいもの連携機能を Swift（iOS）と Next.js（Web）で開発。',
    ],
  },
  {
    period: '2022.2 – 2022.9',
    org: '株式会社CARTA HOLDINGS',
    team: 'fluct アドプラットフォーム事業本部',
    role: 'エンジニア（内定者アルバイト）',
  },
  {
    period: '2022.10 – 2023.3',
    org: '株式会社CARTA HOLDINGS',
    team: 'サポーターズ Tech Studio',
    role: 'エンジニア（内定者アルバイト）',
  },
  {
    period: '2023.4 – 2025.8',
    org: '株式会社CARTA HOLDINGS',
    team: 'サポーターズ Tech Studio',
    role: 'エンジニア',
  },
  {
    period: '2025.9 – now',
    org: '株式会社CARTA HOLDINGS',
    team: 'CTO室 AI Lab',
    role: 'エンジニア',
  },
]
