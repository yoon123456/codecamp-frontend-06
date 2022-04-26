import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
interface IFormValue {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export default function QuizImagePage() {
  const [file1, setFile1] = useState<File>();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일 없음");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string")
        //  console.log(data.target?.result);
        setImageUrl(data.target?.result);
      setFile1(file);
    };
  };

  const onClickSubmit = async (data: IFormValue) => {
    // 함수 하나에서 uploadFile 과 createBoard를 합친다
    const result1 = await uploadFile({
      // 등록하기 할때 파일을 올려주려고한다 여기서의 데이터는 임시데이터가 아닌 스토리지에서 받아온 진짜 이미지 데이터 용량도 작다
      variables: { file: file1 },
    });
    const imageUrl = result1.data?.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };
  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      비밀번호:
      <input type="password" {...register("password")} />
      제목:
      <input type="text" {...register("title")} />
      내용:
      <input type="text" {...register("contents")} />
      이미지
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button>저장하기</button>
    </form>
  );
}
