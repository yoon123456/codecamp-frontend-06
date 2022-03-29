import { Rate } from "antd";
import { useState } from "react";
import styled from "@emotion/styled";

export default function StarPage() {
  const [value, setValue] = useState(3);
  const desc = ["1점", "2점", "3점", "4점", "5점"];

  const handleChange = (value: number) => {
    setValue(value);
    if (value === 1) {
      alert("1점입니다");
    }
    if (value === 2) {
      alert("2점입니다");
    }
    if (value === 3) {
      alert("3점입니다");
    }
    if (value === 4) {
      alert("4점입니다");
    }
    if (value === 5) {
      alert("5점입니다");
    }
  };

  return (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={value} />
      <br />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
    </span>
  );
}
