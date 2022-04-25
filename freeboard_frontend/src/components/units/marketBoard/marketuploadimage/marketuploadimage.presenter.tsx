import * as S from "./marketuploadimage.styles";
import { IUploadsImageUIProps } from "./marketuploadimage.types";

export default function MarketUploadImageUI(props: IUploadsImageUIProps) {
  return (
    <S.Wrapper>
      {props.fileUrl ? (
        <S.UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.UploadButton onClick={props.onClickUpload} type="button">
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}
      <S.UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </S.Wrapper>
  );
}
