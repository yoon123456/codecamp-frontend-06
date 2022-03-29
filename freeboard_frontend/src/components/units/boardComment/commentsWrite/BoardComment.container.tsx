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
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";

export default function BoardComment() {
  // 댓글부분 input 선언
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState("");
  const [contents, setContents] = useState("");

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

  function onChangeCommentContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
  }

  function onChangeRating(value: number) {
    setRating(value);
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
              rating: Number(rating),
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
        alert("댓글등록에 성공했습니다!");
        setWriter("");
        setPassword("");
        setRating("");
        setContents("");
      } catch (error) {
        if (error instanceof Error) alert(error.message);
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
    />
  );
}
