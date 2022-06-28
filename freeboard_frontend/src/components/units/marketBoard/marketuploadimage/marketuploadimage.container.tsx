import { FetchResult, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { checkFileValidation } from "../../../../commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/type";
import MarketUploadImageUI from "./marketuploadimage.presenter";
import { UPLOAD_FILE } from "./marketuploadimage.query";
import { IUploadsImageProps } from "./marketuploadimage.types";

export default function MarketUploadImage(props: IUploadsImageProps) {
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
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <MarketUploadImageUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
