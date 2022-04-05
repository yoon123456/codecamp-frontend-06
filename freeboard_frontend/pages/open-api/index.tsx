import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiPage() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const url = async () => {
      const result = await axios.get("https://inspiration.goprogram.ai");
      setQuote(result.data.quote);
      setAuthor(result.data.author);
    };
    url();
  }, []);

  return (
    <>
      <div>{quote}</div>
      <div>{author}</div>
    </>
  );
}
