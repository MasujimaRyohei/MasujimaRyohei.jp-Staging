import Image from "next/image";
export default function ParcaSilkyRunwayReel2021() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          <div className="article-container">
            <h2 className="article-title">ParcaSilky様</h2>
            <div className="article-body">
              <div>
                <Image
                  src="/works/imgWorksParcaSilky1.webp"
                  alt=""
                  width={560}
                  height={315}
                />
              </div>
              <p>
                レクレドールコレクション2021に出場したブランド『ParcaSilky』のランウェイ用のリールを作成しました。
                2021.11.14. fashion show. Les Clefs d'orCollection(レクコレ)2021aw in 原宿 long
                ver.の映像は個展にて放映。 model ➸ akino &apos; ..zzZ{" "}
                <a href="https://twitter.com/ak_parcasilky">akino Twitter</a>
                <a href="https://twitter.com/nemuri___zzzzzz">..zzZ Twitter</a>
                camera ➸ Naoki Fujita{" "}
                <a href="https://twitter.com/nkfjt">Twitter</a>
                music ➸ ayano_chan{" "}
                <a href="https://twitter.com/___night___zzz">Twitter</a>
                edit ➸ --- mr --- place ➸ akino's room #fashion #fashionshow
                #ファッションショー #レクコレ #2021ss #原宿 #harajuku
                #parcasilky #ぱるしる #パルカシルキー #movie #harajukustyle
                #cultpartykei #kawaii #可愛い #ガーリー #myroom #一眼レフ
              </p>
              <h3>URL</h3>
              <p>
                <a
                  href="https://www.instagram.com/p/CYbf6syrjLk/"
                  target="_blank"
                  rel="noopener"
                >
                  Instagram post
                </a>
              </p>
              <h3>担当</h3>
              <p>動画編集、一部のプロダクションと撮影、小道具</p>
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
