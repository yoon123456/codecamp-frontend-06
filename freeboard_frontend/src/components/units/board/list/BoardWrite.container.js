import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router';
import BoardListUI from './BoardWrite.presenter'
import { FETCH_BOARDS } from './BoardWrite.queries'



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


const onClickMoveToBoardDetail = (event) =>{
    router.push(`/boards/${event.target.id}`)
}

    return <BoardListUI 
    data={data} 
    onClickMoveToBoardNew={onClickMoveToBoardNew}
    onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
    
}


