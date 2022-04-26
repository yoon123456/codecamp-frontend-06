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

export default function ImageUploadPreviewPage() {
  // 파일을 등록하기 버튼을 눌렀을 때 올려주기 위해 state에 따로 저장해서 등록함수에서 사용한다
  // 파일 또는 undefined가 들어있는 배열
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]);

  const [imageUrls, setImageUrls] = useState(["", "", ""]);

  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile =
    (number: number) => (e: ChangeEvent<HTMLInputElement>) => {
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
        if (typeof data.target?.result === "string") {
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file;
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    const results = await Promise.all(
      // 원래는 배열이 있어야하지만 우리는 map을 사용할것이기 때문에 [] 이 필요없음
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    // el이 있으면 파일 url을 보여주고 없으면 빈값
    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    // files.map((el) => {
    // 3. 조건부렌더링 && 사용하고 중괄호와 return 생랴됨
    //   // 2. 삼항연산자
    //   //  return el ? uploadFile({variables: { file: el }}) : undefined

    //   // 1. if문
    //   // if (el) {
    //   //   return uploadFile({
    //   //     variables: { file: el },
    //   //   })
    //   // }else{
    //   //   return undefined
    //   // }

    // })

    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "짱구",
          password: "1234",
          title: "안냐루",
          contents: "이미지 업로드",
          images: resultUrls,
        },
      },
    });
    console.log(result.data?.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
