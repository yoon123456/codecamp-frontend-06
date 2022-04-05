import styled from "@emotion/styled";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 50px;
  background-color: #ffd600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Write = styled.div`
  padding: 20px;
`;
const Market = styled.div`
  padding: 20px;
`;
const MyPage = styled.div`
  padding: 20px;
`;
export default function LayoutNavigation() {
  const router = useRouter();
  const onClickQuote = () => {
    router.push("/open-api");
  };

  return (
    <Wrapper>
      <Write>자유게시판</Write>
      <Market>중고마켓</Market>
      <MyPage>마이페이지</MyPage>
      <MyPage onClick={onClickQuote}>오늘의명언</MyPage>
    </Wrapper>
  );
}
