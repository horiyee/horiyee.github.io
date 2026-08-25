import type { FC } from 'hono/jsx'
import { profile, site } from '../content/site'
import { Layout } from '../components/Layout'

export const About: FC = () => {
  return (
    <Layout title="About" description={`${site.name.en} のプロフィールと経歴。`}>
      <h1>About Me</h1>

      <section>
        <hgroup>
          <h2>Profile</h2>
          <p>自己紹介</p>
        </hgroup>

        <article>
          <hgroup>
            <h3>
              {site.name.ja}（{site.name.en}）
            </h3>
          </hgroup>

          <figure>
            <table>
              <tbody>
                <tr>
                  <th scope="row">ハンドルネーム</th>
                  <td>{profile.handle}</td>
                </tr>
                <tr>
                  <th scope="row">出身地</th>
                  <td>{profile.hometown}</td>
                </tr>
                <tr>
                  <th scope="row">居住地</th>
                  <td>{profile.residence}</td>
                </tr>
              </tbody>
            </table>
          </figure>

          <nav aria-label="SNS">
            <ul>
              <li>
                <a
                  href="https://github.com/horiyee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span> — horiyee</span>
              </li>
              <li>
                <a
                  href="https://x.com/horiy_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X
                </a>
                <span> — horiy_dev</span>
              </li>
              <li>
                <a
                  href="https://qiita.com/horiyee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qiita
                </a>
                <span> — horiyee</span>
              </li>
              <li>
                <a
                  href="https://note.com/horiyee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  note
                </a>
                <span> — horiyee</span>
              </li>
              <li>
                <a
                  href="https://atcoder.jp/users/horiy0125"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AtCoder
                </a>
                <span> — horiy0125</span>
              </li>
            </ul>
          </nav>
        </article>
      </section>

      <section>
        <hgroup>
          <h2>Career</h2>
          <p>経歴</p>
        </hgroup>

        <article>
          <h3>2019</h3>
          <h4>九州大学 経済学部 経済工学科 入学</h4>
        </article>

        <article>
          <h3>2019 - 2020</h3>
          <hgroup>
            <h4>株式会社クアンド</h4>
            <h5>エンジニア（長期インターン）</h5>
          </hgroup>
          <p>
            Vue.js, DjangoでのFA（Factory Automation）Webシステム開発、TensorFlow,
            Kerasでの同システム向けCNNモデル開発、React.jsでの自社プロダクト開発、Gatsby.jsでの自社HP・LP開発に従事。
          </p>
          <p>ほかにも、RevPiなどを用いたFAシステムのハードウェア面にも携わった。</p>
        </article>

        <article>
          <h3>2020 - 2021</h3>
          <hgroup>
            <h4>株式会社Regnio</h4>
            <h5>エンジニア（長期インターン）</h5>
          </hgroup>
          <p>
            Gatsby.jsでの自社HP開発やWebViewを利用したモバイルアプリの開発、Raspberry
            Piクラスタやk3sを用いたFAシステムインフラ構築などに従事。
          </p>
        </article>

        <article>
          <h3>2021</h3>
          <hgroup>
            <h4>note株式会社</h4>
            <h5>web1チーム（旧カイゼンチーム）</h5>
            <h6>エンジニア（長期インターン）</h6>
          </hgroup>
          <p>
            Nuxt.js, Ruby on Railsを用いて、noteのフロントエンド・サーバサイド開発に従事。
          </p>
          <p>ほかにも、Next.js, Svelteを用いてフロントエンドApp分割などにも携わった。</p>
        </article>

        <article>
          <h3>2021</h3>
          <hgroup>
            <h4>株式会社サイバーエージェント</h4>
            <h5>Webフロントエンド</h5>
            <h6>2days ハッカソン型インターン 3位入賞</h6>
          </hgroup>
          <p>用意されたAPIを使い、2日間でECサイトを開発するハッカソン形式のインターン。</p>
          <p>
            詳しくは
            <a
              href="https://www.k-hori.com/blog/posts/311ze4r8ztg3"
              target="_blank"
              rel="noopener noreferrer"
            >
              ブログ記事
            </a>
            を参照。
          </p>
        </article>

        <article>
          <h3>2021</h3>
          <hgroup>
            <h4>株式会社VOYAGE GROUP</h4>
            <h5>Treasure 2021</h5>
            <h6>グランプリ・UI/UX賞受賞</h6>
          </hgroup>
          <p>
            詳しくは
            <a
              href="https://www.k-hori.com/blog/posts/lsk8k8gpz"
              target="_blank"
              rel="noopener noreferrer"
            >
              ブログ記事
            </a>
            を参照。
          </p>
        </article>

        <article>
          <h3>2021</h3>
          <hgroup>
            <h4>クックパッド株式会社</h4>
            <h5>Cookpad Summer Internship 2021</h5>
            <h6>裏Techコース（1day）</h6>
          </hgroup>
          <p>
            Next.js, Ruby on
            Railsで構築されたアプリケーションを題材に、GraphQLを用いてAPIを開発するインターン。
          </p>
        </article>

        <article>
          <h3>2021</h3>
          <hgroup>
            <h4>クックパッド株式会社</h4>
            <h5>買物サービス開発部</h5>
            <h6>エンジニア（就業型インターン）</h6>
          </hgroup>
          <p>
            かいもの連携機能の開発に前半はSwiftを用いて（クックパッドiOSアプリ）、後半はNext.jsを用いて（Web版クックパッド）携わった。
          </p>
        </article>

        <article>
          <h3>2022</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>fluct アドプラットフォーム事業本部</h5>
            <h6>エンジニア（内定者アルバイト）</h6>
          </hgroup>
        </article>

        <article>
          <h3>2022 - 2023</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>サポーターズ Tech Studio</h5>
            <h6>エンジニア（内定者アルバイト）</h6>
          </hgroup>
        </article>

        <article>
          <h3>2023</h3>
          <h4>九州大学 経済学部 経済工学科 卒業</h4>
        </article>

        <article>
          <h3>2023 - 2025</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>サポーターズ Tech Studio</h5>
            <h6>エンジニア</h6>
          </hgroup>
        </article>

        <article>
          <h3>2025 - now</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>CTO室 AI Lab</h5>
            <h6>エンジニア</h6>
          </hgroup>
        </article>
      </section>
    </Layout>
  )
}
