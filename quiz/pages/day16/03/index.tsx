import Router from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MyComponent() {
  //   state = {
  //     count: 0,
  //   };
  const [count, setCount] = useState(0);
  //inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>();
  //   componentDidMount() {
  //     console.log("컴포넌트가 마운트됐습니다~");
  //     this.inputRef.current?.focus();
  //    }

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다~");
    inputRef.current?.focus();
  }, []);

  //   componentDidUpdate() {
  //     console.log("컴포넌트가 변경됐습니다~");
  //   }
  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다~");
  }, []);

  //   componentWillUnmount() {
  //     alert("컴포넌트가 제거됩니다~");
  //   }
  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다~");
    };
  }, []);

  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    Router.push("/");
  };
  console.log("마운트 시작");
  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickButton}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
