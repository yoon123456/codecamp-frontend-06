import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/type";
import CommentListPageUI from "./BoardComment.presenter";
import { MouseEvent } from "react";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const password = prompt("password");
    deleteBoardComment({
      variables: {
        password: password,
        boardCommentId: String((event.currentTarget as HTMLButtonElement).id),
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: String(router.query.boardId),
          },
        },
      ],
    });
    alert("댓글을 삭제하시겠습니까?");
    alert("댓글 삭제에 성공했습니다!");
  };

  return <CommentListPageUI data={data} onClickDelete={onClickDelete} />;
}
