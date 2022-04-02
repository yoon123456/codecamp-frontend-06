import styled from "@emotion/styled";

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
  return (
    <Wrapper>
      <Write>자유게시판</Write>
      <Market>중고마켓</Market>
      <MyPage>마이페이지</MyPage>
    </Wrapper>
  );
}
