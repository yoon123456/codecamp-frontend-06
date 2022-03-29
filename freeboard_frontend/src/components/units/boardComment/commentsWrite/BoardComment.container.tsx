import BoardCommentUI from "./BoardComment.presenter";
import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD_COMMENT } from "./BoardComment.queries";
import { FETCH_BOARD_COMMENTS } from "../commentsList/BoardComment.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/type";
import { Modal } from "antd";

export default function BoardComment() {
  // 댓글부분 input 선언
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(0);

  const router = useRouter();

  // 댓글작성 mutation
  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  function onChangeCommentWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangeCommentPassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeCommentContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  function onChangeRating(value: number) {
    setValue(value);
  }

  const onCilckComment = async () => {
    if (writer !== "" && password !== "" && contents !== "") {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer: writer,
              password: password,
              contents: contents,
              rating: value,
            },
            boardId: String(router.query.boardId),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
        Modal.success({
          content: "댓글 등록에 성공했습니다!!",
        });
        setWriter("");
        setPassword("");
        setContents("");
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            title: "This is an error message",
            content: "댓글 등록에 실패했습니다",
          });
      }
    }
  };

  return (
    <BoardCommentUI
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentPassword={onChangeCommentPassword}
      onChangeCommentContents={onChangeCommentContents}
      onCilckComment={onCilckComment}
      onChangeRating={onChangeRating}
      contents={contents}
      writer={writer}
      password={password}
    />
  );
}
