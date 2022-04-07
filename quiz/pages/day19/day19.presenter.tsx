import * as S from "./day19.styles";
import { UpSquareOutlined } from "@ant-design/icons";

export default function QuizPage(props: any) {
  return (
    <S.Wrapper>
      <S.Input
        type="text"
        onChange={props.onChangeWriter}
        placeholder={"작성자"}
      />
      <S.Input
        type="password"
        onChange={props.onChangePassword}
        placeholder={"비밀번호"}
      />
      <S.Input
        type="text"
        onChange={props.onChangeTitle}
        placeholder={"제목"}
      />
      <S.Input
        type="text"
        onChange={props.onChangeContents}
        placeholder={"내용"}
      />
      <UpSquareOutlined onClick={props.onClickIcon}>
        이미지 업로드
      </UpSquareOutlined>
      <S.File type="file" onChange={props.onChangeFile} ref={props.fileRef} />

      <S.Img src={`https://storage.googleapis.com/${props.image}`} />

      <S.Button onClick={props.onClickSubmit}>{`[저장하기]`}</S.Button>
    </S.Wrapper>
  );
}
