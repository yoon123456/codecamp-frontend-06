// import { Tooltip } from "antd";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./marketDetail.styles";
import { IMarketDetailUIProps } from "./marketDetail.types";
import Dompurify from "dompurify";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store/login";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  const [userInfo] = useRecoilState(userInfoState);
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <S.Wrapper>
      <S.Header>
        <S.Profile>
          <S.ProfilePhoto>
            <img src="/img/ic_profile-56px.png" />
          </S.ProfilePhoto>
          <S.ProfileWrapper>
            <S.ProfileName>
              {props.data?.fetchUseditem.seller.name}
            </S.ProfileName>
            <S.ProfileDate>
              Date:{getDate(props.data?.fetchUseditem.createdAt)}
            </S.ProfileDate>
          </S.ProfileWrapper>
        </S.Profile>
        <S.IconWrapper>
          <S.Icon>
            <S.IconLink>
              <img src="/img/Vector.png" />
            </S.IconLink>
            <S.IconMap>
              {/* <Tooltip placement="topRight" title={}>
                <img src="/img/ic_location_on-32px.png" />
              </Tooltip> */}
            </S.IconMap>
          </S.Icon>
        </S.IconWrapper>
      </S.Header>
      <S.Middle>
        <S.Product>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.Price>{props.priceComma}원</S.Price>
        </S.Product>
        <S.Like>
          <S.LikeIcon />
          <S.LikeNum>{props.data?.fetchUseditem.pickedCount}</S.LikeNum>
        </S.Like>
      </S.Middle>
      <S.Carousel>
        <S.SliderStyle {...settings}>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.ImgWrapper key={el}>
                <S.Image src={`https://storage.googleapis.com/${el}`} />
              </S.ImgWrapper>
            ))}
        </S.SliderStyle>
      </S.Carousel>
      <S.Contents
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
        }}
      ></S.Contents>
      {props.data?.fetchUseditem.tags.map((el: string) => (
        <S.Tag key={el}>{el}</S.Tag>
      ))}
      <S.Map></S.Map>
      {props.data?.fetchUseditem.seller.email === userInfo.email && (
        <S.Footer>
          <S.ListBtn onClick={props.onClickMoveToMarketList}>
            목록으로
          </S.ListBtn>
          <S.EditBtn onClick={props.onClickMoveToMarketEdit}>
            수정하기
          </S.EditBtn>
          <S.BuyBtn>구매하기</S.BuyBtn>
        </S.Footer>
      )}
      {props.data?.fetchUseditem.seller.email !== userInfo.email && (
        <S.Footer>
          <S.ListBtn onClick={props.onClickMoveToMarketList}>
            목록으로
          </S.ListBtn>
          <S.BuyBtn>구매하기</S.BuyBtn>
        </S.Footer>
      )}
    </S.Wrapper>
  );
}
