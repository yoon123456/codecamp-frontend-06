//   const aaa = (bbb: string) => () => {
//     console.log(bbb);
//   };

//   const styles = `
//   width: 500px;
//   height: 500px;
//   &:hover: {
//     background: red,
//   };
// `;

import styled from "@emotion/styled";

// 기본 설정
const styles = {
  color: "#ffff",
  backgroundColor: "#008af6",
  border: "none",
  borderRadius: "10px",
};

interface IBtnProps {
  title: string;
  style?: {};
  onClickEventMove?: () => void;
  onClcickEvent?: () => void;
  isActive?: boolean;
}

export default function BtnPage(props: IBtnProps) {
  const styles2 = {
    ...styles,
    ...props.style,
  };

  return (
    // <button
    //   style={styles2}
    //   onClick={props.onClickEventMove || props.onClcickEvent}
    //   disabled={false || props.isActive}
    // >
    //   {props.title}
    // </button>
    <Btn style={props.style}>dasd</Btn>
  );
}

{
  /* <BtnPage
                title="좋앙요"
                onClcickEvent={aaa("aaa")}
                style={styles}
                isActive={true}
              /> */
}
