import {gql, useQuery} from '@apollo/client'
import { IQuery, IQueryFetchBoardArgs } from '../../src/commons/types/generated/type'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(){

    const { data } = useQuery<Pick<IQuery, 'fetchBoard'>,IQueryFetchBoardArgs> ( FETCH_BOARD,{
        variables:{ number:83011 }
    })

    console.log(data)

    return(
        <div>
            <div>{data?.fetchBoard?.number}번 게시글에 오신것을 환영합니다!!</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}번 게시글에 오신것을 환영합니다!!</div>
        </div>
            // 조건부 랜더링: {data && data.fetchBoard.contents} === data가 있으면 data.fetchBoard.contents를 보여줘
        )   //optional-chaining : {data?.fetchBoard.number}
} 