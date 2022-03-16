import { Wrapper,Search,Body, Header, Row, Title,Propile,Photo,Name,IconRight,
Nav, Red,Qustion,QustionHeader,QustionBody,IconDown, Footer,
FooterBody,FooterWrapper,FootterHeader} from '../../../styles/quizEmotion'

export default function quiz() {
     
    //여기는 자바스크립트 쓰는곳'
      
      return (
    <Wrapper>
        <Search>돋보기</Search>
        <Header>
            <Row>
                <Title>마이</Title> 
                <Propile>
                    <Photo>사진</Photo>
                    <Name>임정아</Name>
                    <IconRight>화살표</IconRight>
                </Propile>
            </Row>
            <Row>
                <Nav>공지사항</Nav>
                <Nav>이벤트</Nav>
                <Nav> <Red>FAQ</Red></Nav>
                <Nav> Q&A </Nav>
            </Row>
        </Header>
        <Body>
            <Qustion>
                <QustionHeader>Q.01</QustionHeader>
                <QustionBody>리뷰 작성은 어떻게 하나요?</QustionBody>
                <IconDown>화살표</IconDown> 
            </Qustion>
            <Qustion>
                <QustionHeader>Q.02</QustionHeader>
                <QustionBody>리뷰 수정/삭제는 어떻게 하나요?</QustionBody> 
                <IconDown>화살표</IconDown> 
            </Qustion>
            <Qustion>
                <QustionHeader>Q.03</QustionHeader>
                <QustionBody>아이디/ 비밀번호를 잊어버렸어요.</QustionBody> 
                <IconDown>화살표</IconDown> 
            </Qustion>
            <Qustion>
                <QustionHeader>Q.04</QustionHeader>
                <QustionBody>회원탈퇴를 하고싶어요</QustionBody> 
                <IconDown>화살표</IconDown> 
            </Qustion>
            <Qustion>
                <QustionHeader>Q.05</QustionHeader>
                <QustionBody>출발지 설정은 어떻게 하나요?</QustionBody> 
                <IconDown>화살표</IconDown> 
            </Qustion>
            <Qustion>
                <QustionHeader>Q.06</QustionHeader>
                <QustionBody>비밀번호를 변경하고 싶어요.</QustionBody>
                <IconDown>화살표</IconDown> 
            </Qustion>

        </Body>
        <Footer>
            <FooterWrapper>
                <FootterHeader>홈</FootterHeader>
                <FooterBody>홈</FooterBody>
            </FooterWrapper>
            <FooterWrapper>
                <FootterHeader>지도</FootterHeader>
                <FooterBody>잇츠로드</FooterBody>
            </FooterWrapper>
            <FooterWrapper>
                <FootterHeader>하트</FootterHeader>
                <FooterBody>마이찜</FooterBody>
            </FooterWrapper>
            <FooterWrapper>
                <FootterHeader><Red>사람</Red></FootterHeader>
                <FooterBody><Red>마이</Red></FooterBody>
            </FooterWrapper>
        </Footer>
    </Wrapper>
    )
}

