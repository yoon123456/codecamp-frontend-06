//게시글이 잘 올라갔는지 확인 할 수 있도록 게시물 상세 화면을 구현하는 기능을 모아논 페이지 
//삭제버튼을 누르면 게시글 삭제 후 목록 화면으로 이동시키기
//수정버튼을 누르면 수정화면으로 이동시키기

import { useQuery,useMutation } from '@apollo/client';
import {useRouter} from 'next/router'
import BoardWriterUI from './BoardWrite.presenter';
import { FETCH_BOARD } from './BoardWrite.queries'
import { DELETE_BOARD } from './BoardWrite.queries'
import {FETCH_BOARDS} from './BoardWrite.queries'

//게시글이 잘 올라 갔는지 조회

export default function BoardDetail(){

    const router = useRouter()
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const { data } = useQuery(FETCH_BOARD,{
        variables:{ boardId:String(router.query.boardId)}
    })
    console.log(data)

    const onClickMoveToBoardList = () => {
        router.push("/boards");
    }
    
    const onClickMoveToBoardEdit = () =>{
        router.push(`/boards/${router.query.boardId}/edit`)
    }
    

    const onClickDelete = (event) => {
       deleteBoard({
           variables:{ boardId: String(event.target.id) },
           refetchQueries: [{query:FETCH_BOARDS}]
        })
        alert("게시글을 진짜로 삭제하시겠습니까???")
        alert("게시글 삭제에 성공하였습니다!!!")
        router.push(`/boards/`)
    }
    return(
    <BoardWriterUI
    data={data}
    onClickDelete={onClickDelete}
    onClickMoveToBoardList={onClickMoveToBoardList}
    onClickMoveToBoardEdit={onClickMoveToBoardEdit}/>
    )

}