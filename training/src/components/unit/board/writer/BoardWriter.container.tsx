import { useState, ChangeEvent, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWriter.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWriter.queris";
import { IBoardWriteProps } from "./BoardWriter.types";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/type";

export default function BoardWritePage(props: IBoardWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async () => {
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              images: fileUrls,
            },
          },
        });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            title: "This is an error message",
            content: "게시글 등록에 실패했습니다",
          });
      }
    }
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangTitle={onChangTitle}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
    />
  );
}
