//graphql api 이용하여 데이터 받아오기
//[ GRAPHQL-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 createBoard 라는 API에 mutation을 요청해서 프로필을 등록해 보세요.(작성자, 제목, 내용은 하드코딩합니다.)

import{useState} from 'react'
import{useMutation, gql} from '@apollo/client'

const CREATE_BOARD = gql`
mutation {
    createBoard(writer:"흰둥이", title:"짱구는 못 말려" , contents:"짱구야 노올자"){
        _id
        number
        message
    }
}
    
`

export default function GraphqlMutationPage(){

    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () =>{
        const result = await callApi()
        console.log(result)
    }

    return(
        <div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>
        </div>
    )
}