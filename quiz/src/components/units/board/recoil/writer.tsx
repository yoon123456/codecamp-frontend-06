import { useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../commons/store";

export default function WriterPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}

// props
// export default function WriterPage(props) {
//   return <div>{props.isEdit ? "수정하기" : "등록하기"}</div>;
// }
