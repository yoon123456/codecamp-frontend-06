import * as S from "./main.styles";

interface MainPageUiProps {
  onChangeName: (event: any) => void;
  onClickGoHome: () => void;
  name: string;
}

export default function MainPageUi(props: MainPageUiProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.SliderStyle {...settings}>
        <S.DivWrapper>
          <S.Div>WELCOME TO OUR PAGE</S.Div>
        </S.DivWrapper>
        <S.DivWrapper>
          <S.Div>WHAT IS YOUR NAME?</S.Div>
          <S.Input
            type="text"
            placeholder="이름을 적어주세요"
            onChange={props.onChangeName}
          />
        </S.DivWrapper>
        <S.DivWrapper>
          <S.Div>HELLO {props.name} !</S.Div>
          <S.Button onClick={props.onClickGoHome}>Go</S.Button>
        </S.DivWrapper>
      </S.SliderStyle>
    </S.Wrapper>
  );
}
