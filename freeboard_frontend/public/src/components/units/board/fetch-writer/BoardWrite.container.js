import { useQuery } from '@apollo/client';
import {useRouter} from 'next/router'
import BoardWriterUI from './BoardWrite.presenter';
import { FETCH_BOARD } from './BoardWrite.queries'

//게시글이 잘 올라 갔는지 조회

export default function BoardWrite(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD,{
        variables:{ boardId:String(router.query.boardId)}
    })
    console.log(data)

    return(
    <BoardWriterUI
    data={data}/>
    )

}