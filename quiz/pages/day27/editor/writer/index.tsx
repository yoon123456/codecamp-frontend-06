import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
export default function QuizEditorWriterPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickSubmit = async (data) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("빈창을 채워주세요!");
      return;
    }

    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error({
        content: "다시 공부하거라",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} /> <br />
      비밀번호: <input type="text" {...register("password")} /> <br />
      제목:
      <input type="text" {...register("title")} /> <br />
      내용:
      <ReactQuill onChange={onChangeContents} />
      <button>등록하기</button>
    </form>
  );
}
