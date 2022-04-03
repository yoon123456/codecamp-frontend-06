import * as St from "./BoardComment.styles";
import { IBoardCommentUIProps } from "./BoardComment.types";

export default function BoardCommentUI(props: IBoardCommentUIProps) {
  return (
    <St.CommentWrapper>
      <St.CommentTitle>
        <img src="/img/댓글아이콘.png" />
        <div>댓글</div>
      </St.CommentTitle>
      <St.CommentWriterWrapper>
        <St.CommentWriter
          type="text"
          placeholder="작성자"
          onChange={props.onChangeCommentWriter}
        ></St.CommentWriter>
        <St.CommentPassword
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeCommentPassword}
        ></St.CommentPassword>
        <St.CommentRating onChange={props.onChangeRating}></St.CommentRating>
      </St.CommentWriterWrapper>
      <St.CommentInputWrapper>
        <St.CommentInputBody
          type="textarea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeCommentContents}
          maxLength={100}
        ></St.CommentInputBody>
        <St.CommentInputFooter>
          <St.CommentInputNumber>
            {props.contents.length}/100
          </St.CommentInputNumber>
          <St.CommentButton onClick={props.onCilckComment}>
            등록하기
          </St.CommentButton>
        </St.CommentInputFooter>
      </St.CommentInputWrapper>
    </St.CommentWrapper>
  );
}
