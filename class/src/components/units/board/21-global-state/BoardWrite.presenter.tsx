// import { useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store/index";

// globla state에서 props drilling 없이 recoil을 사용해서 state 사용해보기
export default function GlobalStatePresenter() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
