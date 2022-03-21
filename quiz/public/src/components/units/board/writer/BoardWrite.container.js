import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite(){
  const [isActive, setIsActive] =useState(false)
  const router = useRouter()

  const [myWriter, setMyWriter] = useState("")
  const [myTitle, setMyTitle] = useState("")
  const [myContents, setMyContents] = useState("")

  const [createBoard] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {

    try {
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents  }
        }) 
        console.log(result)
        console.log(result.data.createBoard.message)
        alert("게시글 등록에 성공했어요!")
        alert("상세 페이지로 이동해 볼까요?!")
        router.push(`/day6-02-container-presenter/${result.data.createBoard.number}`)
        } catch(error){
          alert(error.message)
        }
    
  }
  const onChangeWriter = (event) => {
    setMyWriter(event.target.value)
    if( myWriter !== ""&& myTitle !== "" && myContents !==""){
      setIsActive(true)
    }else{
        setIsActive(false)
    }
  }

  const onChangeTitle = (event) => {
    setMyTitle(event.target.value)
    if( myWriter !== ""&& myTitle !== "" && myContents !==""){
      setIsActive(true)
    }else{
        setIsActive(false)
    }
  }

  const onChangeContents = (event) => {
    setMyContents(event.target.value)
    if( myWriter !== ""&& myTitle !== "" && event.target.value !==""){
      setIsActive(true)
    }else{
        setIsActive(false)
    }
  }

  return(
      <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi}
      isActive={isActive}/>
  )

   
}