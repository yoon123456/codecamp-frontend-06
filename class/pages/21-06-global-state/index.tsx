import { useEffect } from "react";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";

import { isEditState } from "../../src/commons/store/index";
export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  return <GlobalStateContainer />;
}

// globla state에서 props drilling 없이 recoil을 사용해서 state 사용해보기
// props 없이 넘겨보자
