import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

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

export default function ImageUploadSubmitPage() {
  // 파일을 등록하기 버튼을 눌렀을 때 올려주기 위해 state에 따로 저장해서 등록함수에서 사용한다
  const [file1, setFile1] = useState<File>();

  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      alert("파일이 없어욤");
      return;
    }
    const fileReader = new FileReader();
    // 임시 url 형태로 만들어준다
    // readAsDataURL는 데이터를 이진형태로 나타낸다(우리는 사진데이터를 미리보기로 사용하는 용도)
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string")
        //  console.log(data.target?.result);
        setImageUrl(data.target?.result);
      setFile1(file);
    };
  };

  const onClickSubmit = async () => {
    // 함수 하나에서 uploadFile 과 createBoard를 합친다
    const result1 = await uploadFile({
      // 등록하기 할때 파일을 올려주려고한다 여기서의 데이터는 임시데이터가 아닌 스토리지에서 받아온 진짜 이미지 데이터 용량도 작다
      variables: { file: file1 },
    });
    const imageUrl = result1.data?.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "짱구",
          password: "1234",
          title: "안냐루",
          contents: "이미지 업로드",
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data?.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
