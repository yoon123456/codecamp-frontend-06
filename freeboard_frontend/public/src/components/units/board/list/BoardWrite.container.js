import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router';
import ListUI from './BoardWrite.presenter'
import { FETCH_BOARDS } from './BoardWrite.queries'



export default function ListBoardPage(){
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS,{
        variables: {boardId: String(router.query.id)}
    })

    return <ListUI data={data} />
    
}


