import type { FC } from 'hono/jsx'
import { profile, site, sns } from '../content/site'
import { Layout } from '../components/Layout'

export const Index: FC = () => {
  return (
    <Layout>
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
            <p>{profile.handle}</p>
          </hgroup>

          <figure>
            <table>
              <tbody>
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
              {sns.map((item) => (
                <li>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                  <span> — {item.id}</span>
                </li>
              ))}
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
          <h3>2019.4</h3>
          <h4>九州大学 経済学部 経済工学科 入学</h4>
        </article>

        <article>
          <h3>2019.10 - 2020.10</h3>
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
          <h3>2020.11 - 2021.1</h3>
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
          <h3>2021.2 - 2021.10</h3>
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
          <h3>2021.3.27 - 2021.3.28</h3>
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
          <h3>2021.8.9 - 2021.8.27</h3>
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
          <h3>2021.9.8</h3>
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
          <h3>2021.11.1 - 2021.12.9</h3>
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
          <h3>2022.2 - 2022.9</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>fluct アドプラットフォーム事業本部</h5>
            <h6>エンジニア（内定者アルバイト）</h6>
          </hgroup>
        </article>

        <article>
          <h3>2022.10 - 2023.3</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>サポーターズ Tech Studio</h5>
            <h6>エンジニア（内定者アルバイト）</h6>
          </hgroup>
        </article>

        <article>
          <h3>2023.4 - 2025.8</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <h5>サポーターズ Tech Studio</h5>
            <h6>エンジニア</h6>
          </hgroup>
        </article>

        <article>
          <h3>2025.9 - now</h3>
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
