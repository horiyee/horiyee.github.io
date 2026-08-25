import type { FC } from 'hono/jsx'
import { profile, site } from '../content/site'
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
        </article>
      </section>

      <section>
        <hgroup>
          <h2>Career</h2>
          <p>経歴</p>
        </hgroup>

        <article>
          <h3>2019</h3>
          <p>九州大学 経済学部 経済工学科 入学</p>
          <hgroup>
            <h4>株式会社クアンド</h4>
            <p>エンジニア（長期インターン）</p>
          </hgroup>
          <p>
            Vue.js, DjangoでのFA（Factory Automation）Webシステム開発、TensorFlow,
            Kerasでの同システム向けCNNモデル開発、React.jsでの自社プロダクト開発、Gatsby.jsでの自社HP・LP開発に従事。
          </p>
          <p>ほかにも、RevPiなどを用いたFAシステムのハードウェア面にも携わった。</p>
        </article>

        <article>
          <h3>2020</h3>
          <hgroup>
            <h4>株式会社Regnio</h4>
            <p>エンジニア（長期インターン）</p>
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
            <p>web1チーム（旧カイゼンチーム） / エンジニア（長期インターン）</p>
          </hgroup>
          <p>
            Nuxt.js, Ruby on Railsを用いて、noteのフロントエンド・サーバサイド開発に従事。
          </p>
          <p>ほかにも、Next.js, Svelteを用いてフロントエンドApp分割などにも携わった。</p>

          <hgroup>
            <h4>株式会社サイバーエージェント</h4>
            <p>Webフロントエンド / 2days ハッカソン型インターン 3位入賞</p>
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

          <hgroup>
            <h4>株式会社VOYAGE GROUP</h4>
            <p>Treasure 2021 / グランプリ・UI/UX賞受賞</p>
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

          <hgroup>
            <h4>クックパッド株式会社</h4>
            <p>Cookpad Summer Internship 2021 / 裏Techコース（1day）</p>
          </hgroup>
          <p>
            Next.js, Ruby on
            Railsで構築されたアプリケーションを題材に、GraphQLを用いてAPIを開発するインターン。
          </p>

          <hgroup>
            <h4>クックパッド株式会社</h4>
            <p>買物サービス開発部 / エンジニア（就業型インターン）</p>
          </hgroup>
          <p>
            かいもの連携機能の開発に前半はSwiftを用いて（クックパッドiOSアプリ）、後半はNext.jsを用いて（Web版クックパッド）携わった。
          </p>
        </article>

        <article>
          <h3>2022</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <p>fluct アドプラットフォーム事業本部 / エンジニア（内定者アルバイト）</p>
          </hgroup>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <p>サポーターズ Tech Studio / エンジニア（内定者アルバイト）</p>
          </hgroup>
        </article>

        <article>
          <h3>2023 – 2025</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <p>サポーターズ Tech Studio / エンジニア</p>
          </hgroup>
        </article>

        <article>
          <h3>2025 –</h3>
          <hgroup>
            <h4>株式会社CARTA HOLDINGS</h4>
            <p>CTO室 AI Lab / エンジニア</p>
          </hgroup>
        </article>
      </section>
    </Layout>
  )
}
