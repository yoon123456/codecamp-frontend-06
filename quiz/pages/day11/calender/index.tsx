import { DatePicker, Space } from "antd";
import moment from "moment";
import { useState } from "react";

export default function Calender() {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";

  const date = (date, dateString) => {
    setValue(dateString);
  };

  const [value, setValue] = useState("");

  return (
    <Space direction="vertical" size={12}>
      <DatePicker
        defaultValue={moment("2015/01/01", dateFormat)}
        format={dateFormat}
        onChange={date}
      />
      {value}
    </Space>
  );
}
