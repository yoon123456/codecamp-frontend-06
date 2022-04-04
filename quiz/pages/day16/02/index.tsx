// import { useEffect, useRef } from "react";

// export default function ChangePage() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     // alert("비밀번호 창에 온걸 환영합니다");
//     inputRef.current?.focus();
//   }, []);

//   return (
//     <div>
//       <input type="password" ref={inputRef} />
//     </div>
//   );
// }

// export default function QuizPage() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);
//   return (
//     <div>
//       <input type="password" ref={inputRef} />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
const Input = styled.input`
  width: 300px;
  height: 100px;
  :focus {
  }
`;

export default function QuizCount() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <Input type="password" ref={inputRef} />;
}

//
