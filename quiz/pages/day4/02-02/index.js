//graphql api 이용하여 데이터 받아오기
//[ GRAPHQL-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 createBoard 라는 API에 mutation을 요청해서 프로필을 등록해 보세요.(작성자, 제목, 내용은 하드코딩합니다.)
// 위 3번의 과정을 하드코딩 하지 않고,  작성자, 제목, 내용에 대해서 <input /> 태그와 state를 각각 만들고, 직접 입력 받은 작성자, 제목, 내용으로 mutation을 요청해 주세요.

import{useState} from 'react'
import{useMutation, gql} from '@apollo/client'

import{ Style }from '../../../styles/graphql'

const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents:String){
    createBoard(writer: $writer, title: $title, contents: $contents){

        _id
        number
        message
    }

}   
`

export default function GraphqlMutationPage(){

    const [myWriter,setMyWriter] = useState("")
    const [myTitle,setMytTitle] = useState("")
    const [myContents,setMyContents] = useState("")

    const[data, setData] =useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () =>{
        const result = await callApi({
            variables:{
                writer: myWriter,
                title: myTitle,
                contents: myContents
            }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)

    }

    const onChangeWriter = (event) =>{
        setMyWriter(event.target.value) 
      }
  
      const onChangeTitle = (event) =>{
        setMytTitle(event.target.value)
      }
  
      const onChangeContents = (event) =>{
        setMyContents(event.target.value)
      }
  

    return(
        <div>
            <Style>
                작성자: <input type="text" onChange={onChangeWriter}/>
                제목: <input type="text" onChange={onChangeTitle}/>
                내용: <input type="text" onChange={onChangeContents}/>
                <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
            </Style>
        </div>
    )
}