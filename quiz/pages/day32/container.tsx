import { MouseEvent, useCallback, useMemo, useState } from "react";
import PresenterPage from "./presenter";

export default function ContainerPage() {
  console.log("컨테이너 렌더링중");

  let aaa = 0;
  const [number, setNumber] = useState(0);

  // ====== useMemo 적용 전 ====== //
  // const onClickCount = () => {
  //   console.log(count + 1);
  //   count += 1;
  // };
  // const onClickNumber = () => {
  //   console.log(number + 1);
  //   setNumber(number + 1);
  // };

  // ===== useMemo ======== //

  // 이부분에서 오류가 나는데 이유를 잘 모르겠습니다 !!! 구글링을 해봐도 잘 모르겠습니다ㅜㅜ
  const onClickCount = () => {
    console.log(count + 1);
    count += 1;
  };

  const num = useMemo(() => onClickCount(), [count]);

  // // ====== useCallback ======== //
  // const onClickCount = useCallback(() => {
  //   console.log(count + 1);
  //   count += 1;
  // }, []);

  // const onClickNumber = useCallback(() => {
  //   console.log(number + 1);
  //   setNumber((prev) => prev + 1);
  // }, []);

  // ============ useMemo로 useCallback 만들기============//
  const onClickNumber = useMemo(
    () => () => {
      console.log(number + 1);
      setNumber(number + 1);
    },
    []
  );

  return (
    <div>
      <div>=========================</div>
      <h1>이것은 컨테이너 입니다</h1>

      <div>카운트(count): {num}</div>
      <button onClick={onClickCount}>카운트(count) +1 올리기</button>

      <div>카운트(number): {number}</div>
      <button onClick={onClickNumber}>카운트(number) +1 올리기</button>
      <div>=========================</div>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
        }}
      >
        JSX카운트 올리기{" "}
      </button>
      <PresenterPage />
    </div>
  );
}
