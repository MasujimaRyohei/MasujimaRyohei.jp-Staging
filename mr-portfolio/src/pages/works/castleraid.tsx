export default function CastleRaid() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          <div className="article-container">
            <h2 className="article-title">
              トライデントコンピュータ専門学校
              国際交流プロジェクト『CastleRaid』
            </h2>
            <div className="article-body">
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/eqAdF-4yZzc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                当プロジェクトはトライデントコンピュータ専門学校と友好関係にあるフィンランドのカヤーニ大学との国際交流プロジェクトです。
                カヤーニ大学ら日本へ留学してきた学生とトライデントコンピュータ専門学校の学生5人ずつの計10人ほどで制作しました。
              </p>
              <h3>URL</h3>
              <p>
                <a
                  href="https://computer.trident.ac.jp/courses/products/products_game/castle_raid.html"
                  target="_blank"
                  rel="noopener"
                >
                  紹介ページ
                </a>
              </p>
              <h3>担当</h3>
              <p>フロントエンジニア プレイヤーの操作など</p>
              <h3>ゲーム概要</h3>
              <p>城に隠されたお宝を盗み出すVR泥棒ゲーム。</p>
              <p>
                {" "}
                VRヘッドセットを装着するとたくさんのお宝が隠された巨大なお城が目の前に現れる。
              </p>
              <p>
                {" "}
                城の壁を上って侵入し、だれにも見つからずできるだけ多くのお宝を盗み出し高得点を目指せ！
              </p>
            </div>
            <div className="home-link">
              <a href="./#works">Works一覧へ</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
