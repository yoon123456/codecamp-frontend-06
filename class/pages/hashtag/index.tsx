// import { KeyboardEvent, useState } from "react";

// export default function HashTag() {
//   const [hashtag, setHashtag] = useState<string>("");
//   const [hashArr, setHashArr] = useState<string[]>([]);

//   const onKeyUpHash = (event: KeyboardEvent<HTMLInputElement>) => {
//     // 키보드이벤트 키코드 확인하기
//     if (event.keyCode === 32 && event.target.value !== " ") {
//       setHashArr([...hashArr, "#" + event.target.value]);
//     }
//   };
//   return (
//     <div>
//       <span>
//         {hashArr.map((el, idx) => (
//           <span key={idx}>{el}</span>
//         ))}
//       </span>
//       <input type="text" onKeyUp={onKeyUpHash} />
//     </div>
//   );
// }

// 삭제할때는 splice 적용하기

import { functionsIn } from "lodash";
import { KeyboardEvent, MouseEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export default function HashTag() {
  const HashTagPage = (props: any) => {
    // 상위 컴포넌트에서 보내줘야 하는 값 (product write container에서 만들어서 props로 hashArr, setHashArr 넘겨주세용)
    //   const [hashArr, setHashArr] = useState<string[]>([]);

    const onKeyUpHash = (event: KeyboardEvent) => {
      if (
        event.keyCode === 32 &&
        (event.target as HTMLInputElement).value !== " "
      ) {
        const str = "#" + (event.target as HTMLInputElement).value;
        let tempArr = [...props.hashArr];
        tempArr.push(str);
        tempArr = tempArr.filter(
          (el) => el !== "# " && el !== "#  " && el !== "#"
        );
        props?.setHashArr(tempArr);
        (event.target as HTMLInputElement).value = "";
      }
    };
  };
}
