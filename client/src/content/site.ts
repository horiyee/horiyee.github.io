export const site = {
  brand: 'horiyee',
  name: {
    ja: '堀内 凱登',
    en: 'Kaito Horiuchi',
  },
  description: 'Portfolio of Kaito Horiuchi',
} as const

export const profile = {
  handle: 'ほり / hori / horiyee',
  hometown: '香川県',
  residence: '東京都',
  avatar: {
    src: '/images/avatar/me.jpg',
    width: 1600,
    height: 1200,
    alt: `${site.name.ja}（${site.name.en}）`,
  },
} as const

export type SnsLink = {
  name: string
  id: string
  url: string
  icon?: string
}

export const sns: SnsLink[] = [
  {
    name: 'GitHub',
    id: 'horiyee',
    url: 'https://github.com/horiyee',
    icon: '/images/favicon/github.png',
  },
  {
    name: 'X',
    id: 'horiy_dev',
    url: 'https://x.com/horiy_dev',
    icon: '/images/favicon/twitter.png',
  },
  {
    name: 'Qiita',
    id: 'horiyee',
    url: 'https://qiita.com/horiyee',
    icon: '/images/favicon/qiita.png',
  },
  {
    name: 'note',
    id: 'horiyee',
    url: 'https://note.com/horiyee',
    icon: '/images/favicon/note.png',
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
  title?: string
  descriptions?: string[]
  link?: {
    href: string
    label: string
  }
}

export const career: CareerEntry[] = [
  {
    period: '2019.4',
    title: '九州大学 経済学部 経済工学科 入学',
  },
  {
    period: '2019.10 - 2020.10',
    org: '株式会社クアンド',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Vue.js, DjangoでのFA（Factory Automation）Webシステム開発、TensorFlow, Kerasでの同システム向けCNNモデル開発、React.jsでの自社プロダクト開発、Gatsby.jsでの自社HP・LP開発に従事。',
      'ほかにも、RevPiなどを用いたFAシステムのハードウェア面にも携わった。',
    ],
  },
  {
    period: '2020.11 - 2021.1',
    org: '株式会社Regnio',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Gatsby.jsでの自社HP開発やWebViewを利用したモバイルアプリの開発、Raspberry Piクラスタやk3sを用いたFAシステムインフラ構築などに従事。',
    ],
  },
  {
    period: '2021.2 - 2021.10',
    org: 'note株式会社',
    team: 'web1チーム（旧カイゼンチーム）',
    role: 'エンジニア（長期インターン）',
    descriptions: [
      'Nuxt.js, Ruby on Railsを用いて、noteのフロントエンド・サーバサイド開発に従事。',
      'ほかにも、Next.js, Svelteを用いてフロントエンドApp分割などにも携わった。',
    ],
  },
  {
    period: '2021.3.27 - 2021.3.28',
    org: '株式会社サイバーエージェント',
    team: 'Webフロントエンド',
    role: '2days ハッカソン型インターン 3位入賞',
    descriptions: [
      '用意されたAPIを使い、2日間でECサイトを開発するハッカソン形式のインターン。',
    ],
    link: {
      href: 'https://www.k-hori.com/blog/posts/311ze4r8ztg3',
      label: 'ブログ記事',
    },
  },
  {
    period: '2021.8.9 - 2021.8.27',
    org: '株式会社VOYAGE GROUP',
    team: 'Treasure 2021',
    role: 'グランプリ・UI/UX賞受賞',
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
      'Next.js, Ruby on Railsで構築されたアプリケーションを題材に、GraphQLを用いてAPIを開発するインターン。',
    ],
  },
  {
    period: '2021.11.1 - 2021.12.9',
    org: 'クックパッド株式会社',
    team: '買物サービス開発部',
    role: 'エンジニア（就業型インターン）',
    descriptions: [
      'かいもの連携機能の開発に前半はSwiftを用いて（クックパッドiOSアプリ）、後半はNext.jsを用いて（Web版クックパッド）携わった。',
    ],
  },
  {
    period: '2022.2 - 2022.9',
    org: '株式会社CARTA HOLDINGS',
    team: 'fluct アドプラットフォーム事業本部',
    role: 'エンジニア（内定者アルバイト）',
  },
  {
    period: '2022.10 - 2023.3',
    org: '株式会社CARTA HOLDINGS',
    team: 'サポーターズ Tech Studio本部',
    role: 'エンジニア（内定者アルバイト）',
  },
  {
    period: '2023.4 - now',
    org: '株式会社CARTA HOLDINGS',
    team: 'サポーターズ Tech Studio本部',
    role: 'エンジニア',
  },
]
