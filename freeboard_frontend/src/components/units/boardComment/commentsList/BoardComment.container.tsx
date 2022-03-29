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
import { useState } from "react";
import { Modal } from "antd";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
    onClickDelete();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangeCommentPassword = (event: any) => {
    setPassword(event.target.value);
    console.log(password);
    setId(event.target.id);
    console.log(id);
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickDelete = () => {
    try {
      deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: id,
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
      Modal.success({
        content: "댓글을 삭제했습니다",
      });
    } catch (error) {
      Modal.error({
        title: "This is an error message",
        content: "댓글 삭제에 실패했습니다",
      });
    }
  };

  return (
    <CommentListPageUI
      data={data}
      onClickDelete={onClickDelete}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isOpen={isOpen}
      onChangeCommentPassword={onChangeCommentPassword}
    />
  );
}
