import * as S from "./login.styles";
import { ILoginUI } from "./login.types";

export default function LoginUI(props: ILoginUI) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.Wrap>
          <S.Title>로그인</S.Title>
          <S.Label>아이디</S.Label>
          <S.Input
            type="text"
            placeholder="아이디를 입력해주세요"
            {...props.register("email")}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...props.register("password")}
          />
          <S.Error>{props.formState.errors.password?.message}</S.Error>
          <S.Button isActive={props.formState.isValid}>로그인하기</S.Button>
        </S.Wrap>
      </S.Wrapper>
    </form>
  );
}
