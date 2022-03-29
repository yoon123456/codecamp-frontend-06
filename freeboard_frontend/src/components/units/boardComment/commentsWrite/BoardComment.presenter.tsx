import * as S from "./BoardComment.styles";
import { IBoardCommentUIProps } from "./BoardComment.types";
import { useState } from "react";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  const [value, setValue] = useState(0);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <S.CommentWrapper>
      <S.CommentTitle>
        <img src="/img/댓글아이콘.png" />
        <div>댓글</div>
      </S.CommentTitle>
      <S.CommentWriterWrapper>
        <S.CommentWriter
          type="text"
          placeholder="작성자"
          onChange={props.onChangeCommentWriter}
          // defaultValue={props.data.fetchBoardComments.writer}
        ></S.CommentWriter>
        <S.CommentPassword
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeCommentPassword}
          // defaultValue={props.data.fetchBoardComments.password}
        ></S.CommentPassword>
        <S.CommentRating onChange={props.onChangeRating}>
          {/* defaultValue={props.data.fetchBoardComments.rating} */}
        </S.CommentRating>
      </S.CommentWriterWrapper>
      <S.CommentInputWrapper>
        <S.CommentInputBody
          type="textarea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeCommentContents}
          maxLength={100}
        ></S.CommentInputBody>
        <S.CommentInputFooter>
          <S.CommentInputNumber>
            {props.contents.length}/100
          </S.CommentInputNumber>
          <S.CommentButton onClick={props.onCilckComment}>
            등록하기
          </S.CommentButton>
        </S.CommentInputFooter>
      </S.CommentInputWrapper>
    </S.CommentWrapper>
  );
}
