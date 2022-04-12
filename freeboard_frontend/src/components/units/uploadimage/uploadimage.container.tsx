import { checkFileValidation } from "../../../commons/libraries/validation";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import UploadImageUI from "./uploadimage.presenter";
import { IUploadsImageProps } from "./uploadimage.types";
import { UPLOAD_FILE } from "./uploadimage.quries";
import { Modal } from "antd";

export default function UploadsImage(props: IUploadsImageProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const checkd = checkFileValidation(file);
    if (!checkd) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
      console.log(result?.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadImageUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
