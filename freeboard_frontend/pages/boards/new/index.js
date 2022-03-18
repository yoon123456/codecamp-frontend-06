import {useState} from 'react'
import {useMutation , gql} from '@apollo/client'


import {Title, 
  Wrapper, 
  WrapperBody,
  InputHeader, 
  InputBody,
  InputTitle,
  InputContents,
  InputPostNumber,
  Row,
  InputPostNumberSearch,
  InputPhoto,
  Choice,
  Submit,
  Star,
  Label,
  Option,
 Error } from '../../../styles/emotion'

 //graphql api
 export const CREATE_BOARD_INPUT = gql`
  mutation createBoard($createBoardInput:CreateBoardInput!){
    createBoard(CreateBoardInput:$createBoardInput){
      _id
      writer
      title
      contents
    }
  }
 `


export default function yewonPage() {

  //input 과 error 선언
  const [writer, setWriter] = useState("")
  const [WriterError, setWriterError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [title, setTitle] = useState("")
  const [titleError, setTitleError] = useState("")
  const [content, setContent] = useState("")
  const [contentError, setContentError] = useState("")
  const [address, setAddress] = useState("")
  const [addressError, setAddressError] = useState("")
  const [youtube, setYoutube] = useState("")
  const [youtubeError, setYoutubeError] = useState("")


  //api 선언
  const [data, setData] = useState("")
  const [callApi] = useMutation(CREATE_BOARD_INPUT)

  const [myWriter,setMyWriter] = useState("")
  const [myPassword,setMyPassword] = useState("")
  const [myTitle,setMytTitle] = useState("")
  const [myContents,setMyContents] = useState("")




  function onChangeWriter(event){
    setWriter(event.target.value)
    if(event.target.value){
      setWriterError("")
    }
}

function onChangePassword(event){
  setPassword(event.target.value)
  if(event.target.value){
    setPasswordError("")
  } 
}

function onChangeTitle(event){
  setTitle(event.target.value)
  if(event.target.value){
    setTitleError("")
  }
}

function onChangeContents(event){
  setContent(event.target.value)
  if(event.target.value){
    setContentError("")
  }
}

function onChangeAddress(event){
  setAddress(event.target.value)
  if(event.target.value){
    setAddressError("")
  }
}

function onChangeYoutube(event){
  setYoutube(event.target.value)
  if(event.target.value){
    setYoutubeError("")
  }
}
 
  
function onClickSingup(){

    if(writer ==="" & password ==="" & title ==="" & content ==="" & address  ==="" & youtube === ""){
      setWriterError("이름이 올바르지 않습니다!")
      setPasswordError("비밀번호가 올바르지 않습니다!")
      setTitleError("제목이 올바르지 않습니다!")
      setContentError("내용이 올바르지 않습니다!")
      setAddressError("주소가 올바르지 않습니다!")
      setYoutubeError("링크를 적어주세요")
    }
    if(writer === ""){
        setWriterError("이름이 올바르지 않습니다!")
    } 
    if(password === ""){
      setPasswordError("비밀번호가 올바르지 않습니다!")
    }
    if(title === ""){
      setTitleError("제목이 올바르지 않습니다!")
    }
    if(content === ""){
      setContentError("내용이 올바르지 않습니다!")
    }
    if(address === ""){
      setAddressError("주소가 올바르지 않습니다!")
    }
    if(youtube === ""){
      setYoutubeError("링크를 적어주세요!")
    } 
    if(writer !=="" && password !=="" && title !=="" && content !=="" && address  !=="" && youtube !== ""){
        alert("회원가입을 축하합니다!")
          //동기방식으로 처리
        const callGraphqlApi = async () =>{
          const result = await callApi({
            variables:{ CreateBoardInput:{
              writer: myWriter,
              password: myPassword,
              title: myTitle,
              contents: myContents
              }
            }
          })
          console.log(result)
          alert("게시글 등록에 성공하였습니다")
        }

    }
}

    
    return (
      <Title>
        게시판 등록
        <Wrapper>
          <WrapperBody>
            <InputHeader> 작성자 <Star> * </Star> </InputHeader>
            <InputBody type="text" placeholder='이름을 적어주세요.' onChange={onChangeWriter}></InputBody>
            <Error>{WriterError}</Error>
          </WrapperBody>
          <WrapperBody>
            <InputHeader>비밀번호</InputHeader>
            <InputBody type="password" placeholder='비밀번호를 입력해주세요.' onChange={onChangePassword}></InputBody>
            <Error>{passwordError}</Error>
          </WrapperBody>
        </Wrapper>
        <WrapperBody>
            <InputHeader> 제목 </InputHeader>
            <InputTitle type="text" placeholder='제목을 작성해주세요.' onChange={onChangeTitle}></InputTitle>
            <Error>{titleError}</Error>
        </WrapperBody>
        <WrapperBody>
            <InputHeader> 내용 </InputHeader>
            <InputContents type="text" placeholder='내용을 작성해주세요.' onChange={onChangeContents}></InputContents>
            <Error>{contentError}</Error>
        </WrapperBody>
        <WrapperBody>
            <InputHeader> 주소 </InputHeader>
            <Row>
              <InputPostNumber type="text" placeholder='07250' onChange={onChangeAddress}></InputPostNumber>
              <InputPostNumberSearch type="button" > 우편번호검색 </InputPostNumberSearch>
            </Row>
            <InputTitle type="text"  onChange={onChangeAddress}></InputTitle>
            <InputTitle type="text" onChange={onChangeAddress}></InputTitle>
            <Error>{addressError}</Error>
        </WrapperBody>
        <WrapperBody>
            <InputHeader> 유튜브 </InputHeader>
            <InputTitle type="text" placeholder='링크를 복사해주세요.' onChange={onChangeYoutube}></InputTitle>
            <Error>{youtubeError}</Error>
        </WrapperBody>
        <WrapperBody>
            <InputHeader> 사진첨부 </InputHeader>
            <Row>
            <InputPhoto type="button" >+<br></br>Upload </InputPhoto>
            <InputPhoto type="button" >+<br></br>Upload </InputPhoto>
            <InputPhoto type="button" >+<br></br>Upload </InputPhoto>
            </Row>
        </WrapperBody>
        <WrapperBody>
            <InputHeader> 메인 설정</InputHeader> 
              <Option>
                <Choice type="radio" name='check'/>
                <Label>유튜브</Label>
                <Choice type="radio" name='check'/>
                <Label>사진</Label>
              </Option>
        </WrapperBody>
        <Submit onClick={onClickSingup}>등록하기</Submit>

        

      </Title>
  )
}
