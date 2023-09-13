import Image from "next/image";
export default function Heal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          <div className="article-container">
            <h2 className="article-title">
              JASPĘR 『Heal』 Official Music Video
            </h2>
            <div className="article-body">
              <p>
                <Image
                  src="/works/imgWorksHeal.webp"
                  alt=""
                  width={560}
                  height={315}
                />
              </p>
              <p>
                『Heal』 読み方：ヒール Release：2021.10.16(sat) Format：Digital
                https://orcd.co/jasper-heal Director：JASPĘR Illust：A.YAMI
                https://twitter.com/ayaminakazawa Movie：キタザワキュー《CUE
                KITAZAWA》& mr https://cue9jp.jimdofree.com/
                https://masujimaryohei.jp/
                ---------------------------------------------------------------------------------------------------------
                JASPĘR(ジャスパー) SNS ↓↓↓ TikTok:
                https://www.tiktok.com/@jas_per.jp/ Twitter:
                https://twitter.com/jas_permusic/ Instagram:
                https://instagram.com/jas_per.jp/ Shop:
                https://jasper.official.ec/ Official HP: https://jasper.tokyo/
                Contact: jasper.official.jp@gmail.com #JASPĘR #ジャスパー #Heal
                #ヒール #JASPER
              </p>
              <h3>URL</h3>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=FzeHa6rDucA"
                  target="_blank"
                  rel="noopener"
                >
                  YouTube
                </a>
              </p>
              <h3>担当</h3>
              <p>動画編集</p>
            </div>
            <div className="home-link">
              <a href="./#works">Works一覧へ</a>
            </div>
          </div>
        </p>
      </div>
    </main>
  );
}
