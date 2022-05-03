import * as S from "./marketWriter.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { IMarketWriterPageUIProps } from "./marketWriter.types";
import MarketUploadImage from "../marketuploadimage/marketuploadimage.container";
import { v4 as uuidv4 } from "uuid";
import { KeyboardEvent, useEffect } from "react";
import KakaoMapPage from "../../../commons/kakaomap";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import HashTagPage from "./hashTag";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriterPageUI(props: IMarketWriterPageUIProps) {
  useEffect(() => {
    props.reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  const onKeyUpHash = (event: KeyboardEvent) => {
    if (
      event.keyCode === 32 &&
      (event.target as HTMLInputElement).value !== " "
    ) {
      const str = "#" + (event.target as HTMLInputElement).value;
      let tempArr = [...props.hashArr];
      tempArr.push(str);
      tempArr = tempArr.filter(
        (el) => el !== "# " && el !== "#  " && el !== "#"
      );
      props?.setHashArr(tempArr);
      (event.target as HTMLInputElement).value = "";
    }
  };

  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdate)
          : props.handleSubmit(props.onClickSubmit)
      }
    >
      <S.Wrapper>
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
        <S.H1>{props.isEdit ? "상품수정하기" : "상품등록하기"}</S.H1>
        <S.Header>
          <S.Label>상품명</S.Label>
          <S.Input
            type="text"
            {...props.register("name")}
            // defaultValue={...props.register("name")}
            // readOnly={props.isEdit && true}
            value={props.data?.fetchUseditem.name}
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
              value={props.getValues("contents") || ""}
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
            placeholder="#태그"
            {...props.hashArr.map((el) => el)}
            // {...props.register("tags")}
            // defaultValue={props.data?.fetchUseditem.tags}
            onKeyUp={onKeyUpHash}
          />
          <HashTagPage />
        </S.Header>
        <S.Body>
          <S.MapWrapper>
            <S.Label>거래위치</S.Label>
            <S.Map>
              <KakaoMapPage
                lat={props.lat}
                lng={props.lng}
                setLat={props.setLat}
                setLng={props.setLng}
                address={props.address}
                addressDetail={props.addressDetail}
              />
            </S.Map>
          </S.MapWrapper>
          <S.GPSWrapper>
            <S.Label>GPS</S.Label>
            <S.LWrapper>
              <S.LATLNG type="text" placeholder="위도" value={props.lat} />
              <S.GPSIcon src={"/img/ic_location_on-32px.png"}></S.GPSIcon>
              <S.LATLNG type="text" placeholder="경도" value={props.lng} />
            </S.LWrapper>
            <S.Label>주소</S.Label>
            <button type="button" onClick={props.showModal}>
              검색
            </button>

            <S.AddressInput type="text" value={props.address} />
            <S.AddressInput type="text" onChange={props.onChangeAddress} />
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
