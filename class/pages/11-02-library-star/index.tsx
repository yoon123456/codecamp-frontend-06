import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
  };
  return <Rate onChange={handleChange} value={value} />;
}
// 여기서의 onChange는 우리가아는 일반적인 기능이 아닌 라이브러리를 만든 개발자가 만들어논 이름만 같은 onChange이다
