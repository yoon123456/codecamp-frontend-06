import { Tooltip } from "antd";
import { getDate } from "../../../commons/libraries/utils";
import * as S from "./marketDetail.styles";
import { IMarketDetailUIProps } from "./marketDetail.types";
import Dompurify from "dompurify";

export default function MarketDetailUI(props: IMarketDetailUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Profile>
          <S.ProfilePhoto>
            <img src="/img/ic_profile-56px.png" />
          </S.ProfilePhoto>
          <S.ProfileWrapper>
            <S.ProfileName>
              {props.data?.fetchUseditem.seller.name}입니다
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
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Price>{props.data?.fetchUseditem.price}</S.Price>
        </S.Product>
        <S.Like>
          <S.LikeIcon>하트</S.LikeIcon>
          <S.LikeNum>20</S.LikeNum>
        </S.Like>
      </S.Middle>
      <S.Carousel></S.Carousel>
      <S.Contents
        dangerouslySetInnerHTML={{
          __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
        }}
      ></S.Contents>
      <S.Tag>#삼성전자</S.Tag>
      <S.Map></S.Map>
      <S.Footer>
        <S.ListBtn>목록으로</S.ListBtn>
        <S.BuyBtn></S.BuyBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
