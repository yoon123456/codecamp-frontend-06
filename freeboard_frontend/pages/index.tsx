import styled from "@emotion/styled";

export default function Home() {
  const Wrapper = styled.div`
    padding: 0px;
    margin: 0;
    box-sizing: border-box;
  `;
  const Img = styled.img`
    width: 100%;
    padding: 0px;
    margin: 0;
    opacity: 0.8;
    z-index: -1;
  `;
  const Div = styled.div`
    z-index: 1;
  `;

  return (
    <Wrapper>
      <Img src="/img/home.jpg" />
      <Div>안녕</Div>
    </Wrapper>
  );
}

// http://www.readinggroup.or.kr/images/bg_main_01.jpg
