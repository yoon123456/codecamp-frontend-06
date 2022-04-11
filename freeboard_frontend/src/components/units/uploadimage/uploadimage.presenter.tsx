import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./uploadimage.styles";
import { IUploadsImageUIProps } from "./uploadimage.types";

export default function UploadImageUI(props: IUploadsImageUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
          <>Upload</>
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
