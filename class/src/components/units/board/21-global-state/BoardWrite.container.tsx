import GlobalStatePresenter from "./BoardWrite.presenter";

// globla state에서 props drilling 없이 recoil을 사용해서 state 사용해보기
export default function GlobalStateContainer() {
  return <GlobalStatePresenter />;
}
