import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/type";
import { checkFileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageValidationPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 옵셔널체인지 사용해서  event.target.files 가 true 이면 [0]번째 인덱스 파일을 보여줘
    console.log(file);

    const isValid = checkFileValidation(file);
    if (!isValid) return;
    // isValid가 false이면 밑의 함수가 실행되지 않도록 막아버린다!!

    // if (!file?.size) {
    //   alert("파일 없어 돌아가");
    //   return;
    // }
    // if (file.size > 5 * 1024 * 1024) {
    //   alert("파일 용량이 너무 큽니다 (제한: 5MB)");
    //   return;
    // }
    // if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    //   alert("jpeg or png 파일만 업로드 가능");
    //   return;
    // }

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

  return (
    <div>
      <div>이미지 업로드 연습하기!</div>
      <input type="file" onChange={onChangeFile} />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}

// multiple을 설정하면 여러개의 파일을 업로드할 수 있다
