import { gql, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/type";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Button01 from "../../../src/components/commons/buttons/01";
import Input01 from "../../../src/components/commons/inputs/01";

const Error = styled.div`
  color: red;
  font-size: 8px;
`;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5자 이내입니다")
    .required("작성자는 필수입력사항 입니다"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야합니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),
  title: yup
    .string()
    .max(100, "제목은 100자이내로 적어주세요")
    .required("제목는 필수 입력 사항입니다"),
  contents: yup
    .string()
    .max(1000, "내용은 1000자이내로 적어주세요")
    .required("내용는 필수 입력 사항입니다"),
});

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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const onClickSubmit = async (data: IFromValues) => {
    if (data.writer && data.password && data.title && data.contents) {
      const result = await createBoard({
        variables: {
          createBoardInput: data,
        },
      });
      console.log(result.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={{ ...register("writer") }} />
      <Error>{formState.errors.writer?.message}</Error>
      비밀번호:{" "}
      <Input01 type="password" register={{ ...register("password") }} />
      <Error>{formState.errors.password?.message}</Error>
      제목: <Input01 type="text" register={{ ...register("title") }} />
      <Error>{formState.errors.title?.message}</Error>
      내용: <Input01 type="text" register={{ ...register("contents") }} />
      <Error>{formState.errors.contents?.message}</Error>
      <Button01 isActive={formState.isValid} type="submit">
        게시물 등록하기
      </Button01>
    </form>
  );
}
