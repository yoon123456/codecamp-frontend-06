import {
  Title,
  Wrapper,
  WrapperBody,
  InputHeader,
  InputBody,
  InputTitle,
  InputContents,
  InputPostNumber,
  Row,
  InputPostNumberSearch,
  InputPhoto,
  Choice,
  Submit,
  Star,
  Label,
  Option,
  Error,
} from "./BoardWrite.styles";

import { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Title>
      게시판 {props.isEdit ? "수정" : "등록"}
      <Wrapper>
        <WrapperBody>
          <InputHeader>
            {" "}
            작성자 <Star> * </Star>{" "}
          </InputHeader>
          <InputBody
            type="text"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <Error>{props.writerError}</Error>
        </WrapperBody>
        <WrapperBody>
          <InputHeader>비밀번호</InputHeader>
          <InputBody
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>
        </WrapperBody>
      </Wrapper>
      <WrapperBody>
        <InputHeader> 제목 </InputHeader>
        <InputTitle
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard.title}
          readOnly={!!props.data?.fetchBoard.writer ? true : false}
        />
        <Error>{props.titleError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 내용 </InputHeader>
        <InputContents
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <Error>{props.contentsError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 주소 </InputHeader>
        <Row>
          <InputPostNumber
            type="text"
            placeholder="07250"
            onChange={props.onChangeAddress}
          />
          <InputPostNumberSearch type="button">
            {" "}
            우편번호검색{" "}
          </InputPostNumberSearch>
        </Row>
        <InputTitle type="text" onChange={props.onChangeAddress} />
        <InputTitle type="text" onChange={props.onChangeAddress} />
        <Error>{props.addressError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 유튜브 </InputHeader>
        <InputTitle
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
        />
        <Error>{props.youtubeError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 사진첨부 </InputHeader>
        <Row>
          <InputPhoto type="button">
            +<br />
            Upload{" "}
          </InputPhoto>
          <InputPhoto type="button">
            +<br />
            Upload{" "}
          </InputPhoto>
          <InputPhoto type="button">
            +<br />
            Upload{" "}
          </InputPhoto>
        </Row>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 메인 설정</InputHeader>
        <Option>
          <Choice type="radio" name="check" />
          <Label>유튜브</Label>
          <Choice type="radio" name="check" />
          <Label>사진</Label>
        </Option>
      </WrapperBody>
      <Submit
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSingUp}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Submit>
    </Title>
  );
}
