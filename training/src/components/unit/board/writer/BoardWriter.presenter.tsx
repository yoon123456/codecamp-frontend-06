import * as S from "./BoardWriter.styles";
import { IPropsBoardWriteUI } from "./BoardWriter.types";

export default function BoardWriteUI(props: IPropsBoardWriteUI) {
  return (
    <S.Wrapper>
      <S.Header>{props.isEdit ? "게시물 수정" : "새글작성"}</S.Header>
      <S.Body>
        <S.Row>
          <S.Label>제목</S.Label>
          <S.Title onChange={props.onChangTitle}>제목</S.Title>
        </S.Row>
        <S.Row>
          <S.Label>내용</S.Label>
          <S.Contents onChange={props.onChangeContents}>내용</S.Contents>
        </S.Row>
        <S.Row>
          <S.Label>이미지</S.Label>
        </S.Row>
        <S.Row>
          <S.Label>작성자</S.Label>
          <S.Writer onChange={props.onChangeWriter}>작성자</S.Writer>
          <S.Label>비밀번호</S.Label>
          <S.Password onChange={props.onChangePassword}>비밀번호</S.Password>
        </S.Row>
        <S.ImageUpload></S.ImageUpload>
        <S.WriterWrapper></S.WriterWrapper>
      </S.Body>
      <S.Footer>
        <S.Submit>{props.isEdit ? "수정" : "등록"}</S.Submit>
        <S.Cancle></S.Cancle>
      </S.Footer>
    </S.Wrapper>
  );
}
