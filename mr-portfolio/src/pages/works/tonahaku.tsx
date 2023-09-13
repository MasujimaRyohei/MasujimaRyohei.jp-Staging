import Image from "next/image";
export default function Tonahaku() {
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        <div className="article-container">
          <h2 className="article-title">新卒ゲーム制作プロジェクト</h2>
          <div className="article-body">
            <div>
              <Image
                src="../img/works/imgWorksTonahaku.webp"
                alt=""
                width={560}
                height={315}
              />
            </div>
            <p>
              2018年の新卒でチームを作り、スマホゲームをリリースまでするという研修にて作成した作品です。
              現在はサーバーを止めているので、ダウンロードとプレイをすることはできません。
            </p>
            <h3>URL</h3>
            <p>
              <a
                href="https://g2-studios.net/topics/news/2018_tonahaku/"
                target="_blank"
                rel="noopener"
              >
                コーポレートサイト
              </a>
            </p>
            <h3>担当</h3>
            <p>フロントエンジニア</p>
            <h3>担当詳細</h3>
            <p>
              プレイヤーとエネミーの行動プログラムすべて、メインゲームロジック（合体システム）のプログラムすべて
            </p>
          </div>
          <div className="home-link">
            <a href="./#works">Works一覧へ</a>
          </div>
        </div>
      </div>
    </div>
  </main>;
}
