import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router';
import BoardListUI from './BoardWrite.presenter'
import { FETCH_BOARDS } from './BoardWrite.queries'
import {MouseEvent} from 'react'


export default function ListBoardPage(){
    const router = useRouter();

    // const { data } = useQuery(FETCH_BOARDS,{
    //     variables: {boardId: String(router.query.id)}
    // })

const { data } = useQuery(FETCH_BOARDS,{
    variables: {boardId: String(router.query.id)}
});

const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
}


const onClickMoveToBoardDetail = (event:MouseEvent<HTMLDivElement>) =>{
    
   if( event.target instanceof Element) router.push(`/boards/${event.target.id}`)
   //이벤트태그의 자식이면 id를 선언해줘
}
interface IBoardListUI{
    onClickMoveToBoardNew:()=> void
    onClickMoveToBoardDetail: ()=> void
}

    return <BoardListUI 
    data={data} 
    onClickMoveToBoardNew={onClickMoveToBoardNew}
    onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
    
}


