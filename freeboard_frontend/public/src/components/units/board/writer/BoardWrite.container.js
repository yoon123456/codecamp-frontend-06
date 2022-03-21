import {useState} from 'react'
import {useMutation} from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'



export default function NewPage() {
    const [isActive, setIsActive] = useState(false)

    //input 과 error 선언
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [address, setAddress] = useState("")
    const [youtube, setYoutube] = useState("")
    
    
    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentsError, setContentsError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [youtubeError, setYoutubeError] = useState("")
  
  
    //api 선언
    const [createBoard] = useMutation(CREATE_BOARD)
    const router = useRouter()
  
  
    function onChangeWriter(event){
      setWriter(event.target.value)
      if(event.target.value){
        setWriterError("")
      }
      if(writer !== "" && title !== "" && contents !== "" && address !== "" && youtube !== ""){
        setIsActive(true)
      }else{
        setIsActive(false)
      }
  }
  
  function onChangePassword(event){
    setPassword(event.target.value)
    if(event.target.value){
      setPasswordError("")
    } 
    if(writer !== "" && title !== "" && contents !== "" && address !== "" && youtube !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
  }
  
  function onChangeTitle(event){
    setTitle(event.target.value)
    if(event.target.value){
      setTitleError("")
    }
    if(writer !== "" && title !== "" && contents !== "" && address !== "" && youtube !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
  }
  
  function onChangeContents(event){
    setContents(event.target.value)
    if(event.target.value){
      setContentsError("")
    }
    if(writer !== "" && title !== "" && contents !== "" && address !== "" && youtube !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
  }
  
  function onChangeAddress(event){
    setAddress(event.target.value)
    if(event.target.value){
      setAddressError("")
    }
    if(writer !== "" && title !== "" && contents !== "" && address !== "" && youtube !== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
  }
  
  function onChangeYoutube(event){
    setYoutube(event.target.value)
    if(event.target.value){
      setYoutubeError("")
    }
    if(writer !== "" && title !== "" && contents !== "" && address !== "" && event.target.value!== ""){
        setIsActive(true)
    }else{
        setIsActive(false)
    }
  }
   
    
  const onClickSingUp = async () => {
   
      if(writer === ""){
          setWriterError("이름이 올바르지 않습니다!")
      } 
      if(password === ""){
        setPasswordError("비밀번호가 올바르지 않습니다!")
      }
      if(title === ""){
        setTitleError("제목이 올바르지 않습니다!")
      }
      if(contents === ""){
        setContentsError("내용이 올바르지 않습니다!")
      }
      if(address === ""){
        setAddressError("주소가 올바르지 않습니다!")
      }
      if(youtube === ""){
        setYoutubeError("링크를 적어주세요!")
      } 
      if(writer !=="" && password !=="" && title !=="" && contents !=="" && address  !=="" && youtube !== ""){
          // alert("회원가입을 축하합니다!")
            //동기방식으로 처리
      try{
        const result = await createBoard({
          variables: { 
            createBoardInput:{
            writer: writer,
            password: password,
            title: title,
            contents: contents
            }
          }
        })
      console.log(result)
      alert("게시글 등록에 성공하였습니다")
      router.push(`/boards/${result.data.createBoard._id}`)
      }catch(error){
        alert(error.message)
      }
    }
  }
  
    return(
      <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeAddress={onChangeAddress}
      onChangeYoutube={onChangeYoutube}
      onClickSingUp={onClickSingUp}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      addressError={addressError}
      youtubeError={youtubeError}
      isActive={isActive}/>
    )
  
      
  }

  