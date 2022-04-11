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
  Choice,
  Submit,
  Star,
  Label,
  Option,
  Error,
} from "./BoardWrite.styles";
import UploadsImage from "../../uploadimage/uploadimage.container";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <Title>
      {props.isOpen && (
        <Modal
          title="주소등록"
          visible={props.isOpen}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
          style={{ fontSize: "10px" }}
        >
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
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
          // readOnly={!!props.data?.fetchBoard.writer ? true : false}
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
            value={
              props.zonecode || props.data?.fetchBoard?.boardAddress.zipcode
            }
          />
          <InputPostNumberSearch type="button" onClick={props.showModal}>
            우편번호검색
          </InputPostNumberSearch>
        </Row>
        <InputTitle
          type="text"
          value={
            props.daumAddress || props.data?.fetchBoard.boardAddress.address
          }
        />
        <InputTitle
          type="text"
          onChange={props.onChangeAddress}
          defaultValue={props.data?.fetchBoard.boardAddress.addressDetail}
        />
        <Error>{props.addressError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 유튜브 </InputHeader>
        <InputTitle
          type="text"
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard?.youtubeUrl}
        />
        <Error>{props.youtubeError}</Error>
      </WrapperBody>
      <WrapperBody>
        <InputHeader> 사진첨부 </InputHeader>
        <Row>
          {props.fileUrls.map((el, index) => (
            <UploadsImage
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
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
        isEdit={props.isEdit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </Submit>
    </Title>
  );
}
