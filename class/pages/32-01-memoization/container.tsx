import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountLet = () => {
  //   // countLet = countLet + 1
  //   console.log(countLet + 1);
  //   countLet += 1;
  // };

  // ========== state 함수 부분 ============== //
  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useCallback을 사용하면 스테이트까지 같이 memo 되는 문제 발생
  // const onClickCountState = useCallback(() => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  // }, []);

  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  // };

  // const onClickCountState = useCallback(() => {
  //     // console.log(countState + 1);
  //     setCountState((prev) => prev + 1);
  //   }, []);

  // useMemo로 useCallback 만들어보기
  const onClickUseMemo = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>========================</div>
      <h1>이곳은 컨테이너 입니다</h1>

      <div>카운트 (let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트 (state):{countState}</div>
      <button onClick={onClickUseMemo}>카운트(state) +1 올리기</button>
      <div>========================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
