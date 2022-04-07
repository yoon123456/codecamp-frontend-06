// import axios from 'axios'
// package.json 파일이 실행되려면 node_modules파일이 꼭 필요하다 yarn install로 설치
import { ChangeEvent, useState, useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/type";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { Modal } from "antd";

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

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function GraphqlMutationPage() {
  const [myWriter, setMytWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const fileRef = useRef<HTMLInputElement>(null);

  const [data, setData] = useState("");
  const [callApi] = useMutation(CREATE_BOARD);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const callGraphqlApi = async () => {
    // const result = await axios.get("https://koreanjson.com/posts/1")  //rest-api  방식
    const result = await callApi({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    }); // graphql방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    console.log(data);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 옵셔널체인지 사용해서  event.target.files 가 true 이면 [0]번째 인덱스 파일을 보여줘
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;
    // isValid가 false이면 밑의 함수가 실행되지 않도록 막아버린다!!

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      console.log(result.data?.uploadFile.url);

      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setMytWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setMyTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setMyContents(event.target.value);
  };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      비밀번호: <input type="password" onChange={onChangePassword} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
      <br />
      <div>
        <div>이미지 업로드 연습하기!</div>
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "gray",
            cursor: "pointer",
          }}
          onClick={onClickImage}
        >
          이미지선택
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>작성완료</button>
    </div>
  );
}
