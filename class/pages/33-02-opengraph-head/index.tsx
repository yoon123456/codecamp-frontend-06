import Head from "next/head";

export default function OpengraphPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신것을 환영합니다"
        />
        <meta property="og:image" content="http://" />
      </Head>
      <h1>오픈그래프 연습페이지</h1>
    </div>
  );
}
// meta 안에서 사용된 og는 opengraph의 약자이다
