import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: auto;
  padding: 300px 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Quote = styled.div`
  width: auto;
  font-size: 2em;
  padding: 20px;
`;
export const Colone = styled.span`
  font-size: 1em;
  padding: 20px;
`;

export default function OpenApiPage() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const url = async () => {
      const result = await axios.get("https://api.adviceslip.com/advice");
      setQuote(result.data.slip.advice);
    };
    url();
  }, []);

  return (
    <Wrapper>
      <Quote>
        {`"`}
        {quote}
        {`"`}
      </Quote>
    </Wrapper>
  );
}
