import * as S from "./marketWriter.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IMarketWriterPageUIProps } from "./marketWriter.types";
import { AimOutlined } from "@ant-design/icons";
import MarketUploadImage from "../marketuploadimage/marketuploadimage.container";
import { v4 as uuidv4 } from "uuid";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriterPageUI(props: IMarketWriterPageUIProps) {
  console.log("fdfdf", props.data);
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Wrapper>
        <S.H1>{props.isEdit ? "상품수정하기" : "상품등록하기"}</S.H1>
        <S.Header>
          <S.Label>상품명</S.Label>
          <S.Input
            type="text"
            {...props.register("name")}
            // defaultValue={...props.register("name")}
            // readOnly={props.isEdit && true}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.Label>한줄요약</S.Label>
          <S.Input
            type="text"
            {...props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          <S.Label>상품설명</S.Label>
          <S.QuillWrapper>
            <ReactQuill
              theme="snow"
              style={{ height: "150px" }}
              onChange={props.onChangeContents}
            />
          </S.QuillWrapper>
          <S.Error>{props.formState.errors.contents?.message}</S.Error>
          <S.Label>판매가격</S.Label>
          <S.Input
            type="text"
            {...props.register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <S.Error>{props.formState.errors.price?.message}</S.Error>
          <S.Label>태그입력</S.Label>
          <S.Input
            type="text"
            placeholder="#태그 #태그 #태그"
            {...props.register("tags")}
            defaultValue={props.data?.fetchUseditem.tags}
          />
        </S.Header>
        <S.Body>
          <S.MapWrapper>
            <S.Label>거래위치</S.Label>
            <S.Map></S.Map>
          </S.MapWrapper>
          <S.GPSWrapper>
            <S.Label>GPS</S.Label>
            <S.LWrapper>
              <S.LATLNG type="text" placeholder="위도" />
              <S.GPSIcon src={"/img/ic_location_on-32px.png"}></S.GPSIcon>
              <S.LATLNG type="text" placeholder="경도" />
            </S.LWrapper>
            <S.Label>주소</S.Label>
            <S.AddressInput type="text" />
            <S.AddressInput type="text" />
          </S.GPSWrapper>
        </S.Body>
        <S.Photo>
          <S.Label>사진 첨부</S.Label>
          <S.ImageUpload>
            {props.fileUrls.map((el, index) => (
              <MarketUploadImage
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageUpload>
        </S.Photo>
        <S.RadioWrapper>
          <S.Label>메인 사진 설정</S.Label>
          <S.Radio type="radio" name="photo" />
          사진1
          <S.Radio type="radio" name="photo" />
          사진2
          <S.Radio type="radio" name="photo" />
          사진3
        </S.RadioWrapper>
        <S.Footer>
          <S.Submit isActive={props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Submit>
        </S.Footer>
      </S.Wrapper>
    </form>
  );
}
