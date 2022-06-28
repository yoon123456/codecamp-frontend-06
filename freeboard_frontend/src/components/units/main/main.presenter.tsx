import { ChangeEvent, MouseEvent, useState } from "react";
import * as S from "./main.styles";

interface MainPageUiProps {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickGoHome: () => void;
  name: string;
}

export default function MainPageUI(props: MainPageUiProps) {
  const [page, setpage] = useState("");

  const onClickLanding = (e: MouseEvent<HTMLDivElement>) => {
    setpage(e.currentTarget.id);
  };
  return (
    <S.Wrapper>
      <S.WrapperIn>
        {page === "" && (
          <S.DivWrapper>
            <S.Div>WELCOME TO OUR PAGE</S.Div>
            <S.Button id="1" onClick={onClickLanding}>
              Next{">"}
            </S.Button>
          </S.DivWrapper>
        )}
        {page === "1" && (
          <S.DivWrapper>
            <S.Div id="2" onClick={onClickLanding}>
              WHAT IS YOUR NAME?
            </S.Div>
            <S.Input
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.onChangeName}
            />
            <S.Button id="2" onClick={onClickLanding}>
              Next{">"}
            </S.Button>
          </S.DivWrapper>
        )}
        {page === "2" && (
          <S.DivWrapper>
            <S.Div>HELLO {props.name} !</S.Div>
            <S.Button onClick={props.onClickGoHome}>Go</S.Button>
          </S.DivWrapper>
        )}
      </S.WrapperIn>
    </S.Wrapper>
  );
}
