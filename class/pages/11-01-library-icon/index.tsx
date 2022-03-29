import { CheckSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(CheckSquareOutlined)`
  font-size: 50px;
  color: violet;
`;
export default function LibraryIconPage() {
  return <MyIcon />;
  // <CheckSquareOutlined />;
}
// 아이콘에 id값을 쓰지 못한다
// css를 바꾸고 싶을때
