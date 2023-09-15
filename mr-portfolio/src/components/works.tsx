type Props = {
  title: string;
  thumbnail: string;
  description: string;
  url: string;
  rule: string;
  worksDescription: string;
};

export default function Works({
  title,
  thumbnail,
  description,
  url,
  rule,
  worksDescription,
}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          <div className="article-container">
            <h2 className="article-title">{title}</h2>
            <div className="article-body">
              <div>{thumbnail}</div>
              <p>{description}</p>
              <h3>URL</h3>
              <p>
                <a href={url} target="_blank" rel="noopener">
                  紹介ページ
                </a>
              </p>
              <h3>担当</h3>
              <p>{rule}</p>
              {worksDescription}
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
