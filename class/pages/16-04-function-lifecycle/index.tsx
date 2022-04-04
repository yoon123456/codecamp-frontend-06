import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

// interface IState {
//   count: number;
// }

export default function CounterPage() {
  // Component를 통해 컴포넌트 기능을 가진 클래스 만들기
  const router = useRouter();

  // inputRef = createRef<HTMLInputElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(99);

  // 1. DidMount
  // componentDidMount() {
  //   console.log("마운트 됨");
  //   this.inputRef.current?.focus();
  // }
  // // 화면에 렌더하고 실행되는 부분 한번만 실행되는 부분
  // // 포커스 깜빡 깜빡
  // useEffect(()=>{
  //   console.log("마운트됨!!")
  //   inputRef.current?.focus();
  // },[]);

  // 2. DidUpdate
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐");
  // }
  // // 수정하고 리렌더링 하는 부분 리렌더가 될때 마다 실행되는 부분
  useEffect(() => {
    console.log("수정되고 다시 그려짐");
  }, []);

  // 3. WillUnMount
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐");
  // }
  // // 컴포넌트가 사라지는 부분
  // // 채팅방 나가기
  // // api 요청
  // useEffect(()=>{
  //   return ()=>{
  //     console.log("컴포넌트 사라짐");
  //   }
  // })

  // 4. DidMount와 WillUnMount 합치기
  useEffect(() => {
    console.log("마운트됨!!");
    inputRef.current?.focus();
    return () => {
      console.log("컴포넌트 사라짐");
    };
  }, []); // []의 의미 의존성 배열 (dependency Array): 이 함수가 실행될지 말지를 의존중 한번만 실행되고 끝남 언제 다시 실행할 때까지 컨트롤이 가능하다

  // 5. useEffect의 잘못된 사용의 예(화면이 그려지고 나서 실행이 된다)
  // -렌더링이 두번되는 번거로움 발생하기 때문에 setState를 사용하는것을 가급적이면 피해라
  // -무한루프에 빠질 수 있다
  useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]);

  const onClickCounter = () => {
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    setCount((prev) => prev + 1);
  };

  // this.setState Component에 있는 내장함수이다 자동으로 사용가능

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행될까");

  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <button onClick={onClickMove}>나가기 바이바이</button>
    </div>
  );

  // render도 extends Component로 확장했기 떄문에 사용 가능 render 이름 변경 불가
}
