import WriterPage from "../../../src/components/units/board/recoil/writer";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { isEditState } from "../../../src/commons/store/index";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <WriterPage />;
}

// props
// export default function EditPageProps() {
//   const [isEdit, setIsEdit] = useState(true);

//   return <WriterPage isEdit={isEdit} />;
// }
