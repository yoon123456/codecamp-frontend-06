import { Tooltip } from "antd";
import * as S from "./marketDetail.styles";
export default function MarketDetailUI() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderProfile>
          <S.HeaderProfilePhoto>
            <img src="/img/ic_profile-56px.png" />
          </S.HeaderProfilePhoto>
          <S.HeaderProfileWrapper>
            <S.HeaderProfileWrapperName>작성자</S.HeaderProfileWrapperName>
            <S.HeaderProfileWrapperDate>Date:</S.HeaderProfileWrapperDate>
          </S.HeaderProfileWrapper>
        </S.HeaderProfile>
        <S.HeaderIconWrapper>
          <S.HeaderIcon>
            <S.HeaderIconLink>
              <img src="/img/Vector.png" />
            </S.HeaderIconLink>
            <S.HeaderIconMap>
              <Tooltip placement="topRight" title={text}>
                <img src="/img/ic_location_on-32px.png" />
              </Tooltip>
            </S.HeaderIconMap>
          </S.HeaderIcon>
        </S.HeaderIconWrapper>
      </S.Header>
    </S.Wrapper>
  );
}
