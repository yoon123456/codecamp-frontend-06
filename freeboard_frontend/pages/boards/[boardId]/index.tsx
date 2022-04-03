// 등록된 게시판을 보여주는 페이지, 댓글이 나타나는 페이지

import BoardDetail from "../../../src/components/units/board/detail/BoardWrite.container";
import BoardComment from "../../../src/components/units/boardComment/commentsWrite/BoardComment.container";
import BoardCommentList from "../../../src/components/units/boardComment/commentsList/BoardComment.container";

export default function GraphqlFetchPage() {
  return (
    <>
      <BoardDetail />
      <BoardComment />
      <BoardCommentList />
    </>
  );
}
