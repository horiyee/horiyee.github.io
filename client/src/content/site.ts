export const site = {
  brand: 'horiyee',
  name: {
    ja: '堀内 凱登',
    en: 'Kaito Horiuchi',
  },
  title: 'Kaito Horiuchi — Portfolio',
  description:
    'Software engineer. Building web products with care for craft, clarity, and speed.',
  url: 'https://horiyee.github.io',
  locale: 'ja_JP',
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
] as const

export const profile = {
  handle: 'ほり / hori / horiyee',
  hometown: '香川県',
  residence: '福岡県',
  summary:
    'Web を中心にプロダクト開発をしてきたエンジニア。FA・機械学習からモバイルまで幅広く触りつつ、フロントエンドとプロダクト体験を得意としています。',
} as const

export const sns = [
  {
    name: 'GitHub',
    id: 'horiyee',
    url: 'https://github.com/horiyee',
  },
  {
    name: 'X',
    id: 'horiy0125',
    url: 'https://x.com/horiy0125',
  },
  {
    name: 'Qiita',
    id: 'horiy0125',
    url: 'https://qiita.com/horiy0125',
  },
  {
    name: 'note',
    id: 'horiy0125',
    url: 'https://note.com/horiy0125',
  },
  {
    name: 'AtCoder',
    id: 'horiy0125',
    url: 'https://atcoder.jp/users/horiy0125',
  },
] as const

export const career = [
  {
    period: '2019.4',
    organization: '九州大学 経済学部 経済工学科 入学',
    role: null,
    description: null,
  },
  {
    period: '2019.10 – 2020.10',
    organization: '株式会社クアンド',
    role: 'エンジニア（長期インターン）',
    description:
      'Vue.js / Django での FA Web システム開発、TensorFlow / Keras での CNN モデル開発、React / Gatsby での自社プロダクト・HP 開発に従事。RevPi などハードウェア面にも携わった。',
  },
  {
    period: '2020.11 – 2021.1',
    organization: '株式会社 Regnio',
    role: 'エンジニア（長期インターン）',
    description:
      'Gatsby での自社 HP、WebView モバイルアプリ、Raspberry Pi クラスタや k3s を用いた FA インフラ構築などに従事。',
  },
  {
    period: '2021.2 – 2021.10',
    organization: 'note 株式会社',
    role: 'カイゼンチーム / web1 チーム · エンジニア（長期インターン）',
    description:
      'Nuxt.js / Ruby on Rails で note のフロント・サーバサイド開発に従事。Next.js / Svelte を用いたフロントエンド App 分割にも携わった。',
  },
  {
    period: '2021.3.27 – 2021.3.28',
    organization: '株式会社サイバーエージェント',
    role: 'Web フロントエンド · 2days ハッカソン型インターン 3位入賞',
    description:
      '用意された API を使い、2日間で EC サイトを開発するハッカソン形式のインターン。',
  },
  {
    period: '2021.8.9 – 2021.8.27',
    organization: '株式会社 VOYAGE GROUP',
    role: 'Treasure 2021 · グランプリ・UI/UX 賞受賞',
    description: '短期インターンプログラム Treasure 2021 に参加。',
  },
  {
    period: '2021.9.8',
    organization: 'クックパッド株式会社',
    role: 'Cookpad Summer Internship 2021 · 裏 Tech コース (1day)',
    description:
      'Next.js / Rails アプリを題材に、GraphQL を用いた API 開発を体験。',
  },
  {
    period: '2021.11.1 – 2021.12.9',
    organization: 'クックパッド株式会社',
    role: '買物サービス開発部 · エンジニア（就業型インターン）',
    description:
      'かいもの連携機能の開発に、前半は Swift（iOS アプリ）、後半は Next.js（Web）で携わった。',
  },
] as const

export const history = [
  {
    period: '2000 – 2005',
    description:
      '2000年1月、香川県高松市にて生まれる。幼稚園の頃から車や CD ラジカセといった機械類に興味が強かった。',
  },
  {
    period: '2006 – 2011',
    description:
      '小学生低学年の頃、父親からノートパソコンをもらったことを機にコンピューターの世界にのめり込む。OS の入れ替えやハードウェア換装など、低レイヤーな領域へ興味が広がった。',
  },
  {
    period: '2012 – 2014',
    description:
      '中学生の頃、Windows PC に Mac OS X を入れる Hackintosh に手を出す。Kext やドライバ周りなど、初めて触れるものも多かった。',
  },
  {
    period: '2015 – 2017',
    description:
      '高校生になり、モバイル端末の OS / ハードウェアへ興味がシフト。root 化からブートローダーアンロック、ROM 焼きまで Android 端末のカスタムを行っていた。',
  },
  {
    period: '2018',
    description:
      '浪人期間。パソコンに触る時間は減ったが、分解や OS 入れ替えは続けていた。',
  },
  {
    period: '2019 –',
    description:
      '九州大学入学。「プログラミング演習」で Python に触れ、開発の面白さに気づく。以降、Web を中心に FA・ハードウェア・機械学習など幅広くインターンで実務経験を積む。',
  },
] as const

export const technologies = {
  experienced: [
    'TypeScript',
    'React',
    'Next.js',
    'Vue.js',
    'Nuxt',
    'Python',
    'Ruby on Rails',
    'Django',
  ],
  interested: ['Hono', 'Svelte', 'GraphQL', 'Rust', 'Go'],
} as const
