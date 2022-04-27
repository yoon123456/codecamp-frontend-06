import styled from "@emotion/styled";
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
  padding: 40px;
  cursor: pointer;
`;
const Market = styled.div`
  padding: 40px;
  cursor: pointer;
`;
const MyPage = styled.div`
  padding: 40px;
  cursor: pointer;
`;
export default function LayoutNavigation() {
  const router = useRouter();
  const onClickQuote = () => {
    router.push("/open-api");
  };
  const onClicMarket = () => {
    router.push("/market");
  };
  const onClicBoards = () => {
    router.push("/boards");
  };
  const onClicMypage = () => {
    router.push("/mypage");
  };
  return (
    <Wrapper>
      <Write onClick={onClicBoards}>자유게시판</Write>
      <Market onClick={onClicMarket}>중고마켓</Market>
      <MyPage onClick={onClicMypage}>마이페이지</MyPage>
      <MyPage onClick={onClickQuote}>오늘의명언</MyPage>
    </Wrapper>
  );
}
