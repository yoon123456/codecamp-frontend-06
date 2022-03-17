//import axios from 'axios'
//package.json 파일이 실행되려면 node_modules파일이 꼭 필요하다 yarn install로 설치
import {useState} from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
mutation{
    createBoard(writer:"예원",title:"좋은 하루",contents:"좋은 하루 보내세요"){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(){
    const[data, setData] =useState("")
    const[callApi] =useMutation(CREATE_BOARD)

    const callGraphqlApi= async () =>{

       //const result = await axios.get("https://koreanjson.com/posts/1")  //rest-api  방식
        const result = await callApi() //graphql방식
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)

    }

    return(
        <div>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )

}