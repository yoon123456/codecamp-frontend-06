import axios from "axios";

export default function OpengraphPreviewPage() {
  const onClickOpengraph = async () => {
    const result = await axios.get("https://www.gmarket.co.kr");
    // 이런 과정을 쉽게 해주는 라이브러리 cheerio , puppeteer
    result.data.split("<meta").filer((el) => el.includes("og:title"));
  };
  return (
    <div>
      <h1>사이트 미리 보기 연습</h1>
      <button onClick={onClickOpengraph}>미리보기 실행</button>
    </div>
  );
}
