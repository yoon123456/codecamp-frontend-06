// 게시글이 잘 올라갔는지 확인 할 수 있도록 게시물 상세 화면을 구현하는 기능을 모아논 페이지
// 삭제버튼을 누르면 게시글 삭제 후 목록 화면으로 이동시키기
// 수정버튼을 누르면 수정화면으로 이동시키기

import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriterUI from "./BoardWrite.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardWrite.queries";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
  IMutationDeleteBoardArgs,
} from "../../../../commons/types/generated/type";
import { Modal } from "antd";

// 게시글이 잘 올라 갔는지 조회

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    deleteBoard({
      variables: { boardId: String((event.target as HTMLButtonElement).id) },
    });
    Modal.success({
      content: "게시글 삭제에 성공했습니다",
    });
    router.push(`/boards/`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoardWriterUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
