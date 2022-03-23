// 게시물 등록할 수 있게 정보입력하는 페이지
import BoardWrite from "../../../../freeboard_frontend/src/components/units/board/writer/BoardWrite.container";


export default function GraphqlMutationPage(){
  return <BoardWrite isEdit={false} />      
}