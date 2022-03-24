//수정페이지입니다

import BoardWrite from "../../../../src/components/units/board/writer/BoardWrite.container";
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/client'
import{FETCH_BOARD} from '../../../../src/components/units/board/writer/BoardWrite.queries';


export default function BoardEditPage(){

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId:String(router.query.boardId)}
    })

    return <BoardWrite isEdit={true} data={data}/>
}