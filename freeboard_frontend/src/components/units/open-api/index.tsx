import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiPage() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const url = async () => {
      const result = await axios.get("https://inspiration.goprogram.ai");
      console.log(result.data);
      setQuote(result.data);
    };
    url();
  }, []);

  return (
    <>
      <div>오늘의 명언</div>
      <div>{quote}</div>
    </>
  );
}
