// 컨테이너 컴포넌트

import { useMutation } from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"  // export default가 하나 이므로 {}없이 불러올 이름만 적어주어도 import 된다
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import {useRouter} from 'next/router'
import { useState, ChangeEvent,  } from 'react'
import { IBoardWriteProps,IMyVariables } from './BoardWrite.types'


export default function BoardWrite(props: IBoardWriteProps){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)
    const [myWriter,setMytWriter] =useState("")
    const [myTitle,setMyTitle] =useState("")
    const [myContents,setMyContents] =useState("")

    const [data, setData] =useState("")
    const [createBoard] =useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickUpdate =async()=>{
        
        //작성했던 것을 객체로 만들고 
        const myVariables:IMyVariables ={number: Number(router.query.mynumber)}

        if(myWriter !== "") myVariables.writer = myWriter     //if문일때 한줄에 작성될 경우 중괄호는 생략이 가능하다, if문에서 중괄호없이 밑줄에다가 들여쓰기해서 한줄만 작상하면 그문장 실행 두줄째는 실행안함
        if(myTitle !== "") myVariables.title = myTitle
        if(myContents !== "") myVariables.contents = myContents

        await updateBoard({
            variables: myVariables
        })
        alert("게시글 수정에 성공하였습니다!!")
        router.push(`/09-01-boards/${router.query.mynumber}`) 

    }

    const callGraphqlApi= async () =>{

        const result = await createBoard({
            variables:{ writer: myWriter, title: myTitle, contents: myContents }
        }) //graphql방식
        // console.log(result)
        // console.log(result.data.createBoard.message)
        // setData(result.data.createBoard.message)
        alert("게시글 등록에 성공하였습니다!!")
        router.push(`/09-01-boards/${result.data.createBoard.number}`) 
    }

    const onChangeWriter = (event:ChangeEvent<HTMLInputElement>) =>{
        setMytWriter(event.target.value) 

        if( myWriter !== ""&& myTitle !== "" && myContents !==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    const onChangeTitle = (event:ChangeEvent<HTMLInputElement>) =>{
        setMyTitle(event.target.value)

        if( myWriter !== ""&& myTitle !== "" && myContents !==""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    const onChangeContents = (event:ChangeEvent<HTMLInputElement>) =>{
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
       onClickUpdate={onClickUpdate}
       isActive={isActive}
       isEdit={props.isEdit}
       data={props.data}
       />
    )

}



