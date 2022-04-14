import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/type";

interface IFromValues {
  writer?: string;
  password?: string;
  title: string;
  contents: string;
}

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function QuizReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  const [writeError, setWriteError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async (data: IFromValues) => {
    if (!data.writer) setWriteError("이메일을 입력해주세요");
    if (!data.password) setPasswordError("비밀번호를 입력해주세요");
    if (!data.title) setTitleError("제목을 입력해주세요");
    if (!data.contents) setContentsError("내용을 입력해주세요");

    if (data.writer && data.password && data.title && data.contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: data,
        },
      });
      console.log(result.data);
    }
  };

  register("writer", {
    onChange: (e) => e.target.value === setWriteError(""),
  });
  register("password", {
    onChange: (e) => e.target.value === setPasswordError(""),
  });
  register("title", {
    onChange: (e) => e.target.value === setTitleError(""),
  });
  register("contents", {
    onChange: (e) => e.target.value === setContentsError(""),
  });

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "red" }}>{writeError}</div>
      비밀번호: <input type="password" {...register("password")} />
      <div style={{ color: "red" }}>{passwordError}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "red" }}>{titleError}</div>
      내용: <input type="text" {...register("contents")} />
      <div style={{ color: "red" }}>{contentsError}</div>
      <button type="submit">게시물 등록하기</button>
    </form>
  );
}
