import {Title, Login, LoginBody, LoginInputHeader,WritterInputBody } from '../styles/emotion'


export default function yewonPage() {
     
  //여기는 자바스크립트 쓰는곳
    
    return (
      <Title>
        게시판 등록
        <Login>
          <LoginBody>
            <LoginInputHeader> 작성자 </LoginInputHeader>
            <WritterInputBody type="text" placeholder='이름을 적어주세요.'></WritterInputBody>
          </LoginBody>
          <LoginBody>
            <LoginInputHeader>비밀번호</LoginInputHeader>
            <WritterInputBody type="password" placeholder='비밀번호를 입력해주세요.'></WritterInputBody>
          </LoginBody>
        </Login>
        <LoginBody>
            <LoginInputHeader> 제목 </LoginInputHeader>
            <WritterInputBody type="text" placeholder='제목을 작성해주세요.'></WritterInputBody>
        </LoginBody>

      </Title>
  )
}
