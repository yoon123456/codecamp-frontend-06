import { useMutation } from "@apollo/client";
import { useState, ChangeEvent, useRef } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/type";
import { UPLOAD_FILE, CREATE_BOARD } from "./day19.query";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";
import QuizPage from "./day19.presenter";

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [image, setImage] = useState("");

  const [data, setData] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      console.log(result.data?.uploadFile.url);

      setImage(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickIcon = () => {
    fileRef.current?.click();
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            images: [image],
          },
        },
      });
      setData(result.data.createBoard._id);
      console.log(result);
      Modal.success({
        content: "게시글 등록에 성공했습니다!!",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: "This is an error message",
          content: "게시글 등록에 실패했습니다",
        });
    }
  };

  return (
    <QuizPage
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickIcon={onClickIcon}
      onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      fileRef={fileRef}
      image={image}
    />
  );
}
