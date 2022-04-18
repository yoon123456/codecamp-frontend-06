// import { useRouter } from "next/router";
// import { useRecoilState } from "recoil";
// import { visitedPageState } from "../../src/commons/store";

import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  //   const router = useRouter();
  //   const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  //   const onClickMoveToPage = (path: string) => () => {
  //     setVisitedPage(path);
  //     router.push(path);
  //  };   custom hook으로 만들어주는 부분

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
