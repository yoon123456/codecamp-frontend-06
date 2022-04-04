// 클래스형 컴포넌트 만들기 실습

import { Component, createRef } from "react";
import Router from "next/router";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // Component를 통해 컴포넌트 기능을 가진 클래스 만들기

  inputRef = createRef<HTMLInputElement>();

  state = {
    count: 0,
  };
  // extends Component로 확장했기 떄문에 state 사용가능 class와는 상관이 없음 state 이름 변경 불가

  componentDidMount() {
    console.log("마운트 됨");
    this.inputRef.current?.focus();
  }
  // 화면에 렌더하고 실행되는 부분 한번만 실행되는 부분
  // 포커스 깜빡 깜빡

  componentDidUpdate() {
    console.log("수정되고 다시 그려짐");
  }
  // 수정하고 리렌더링 하는 부분 리렌더가 될때 마다 실행되는 부분

  componentWillUnmount() {
    console.log("컴포넌트 사라짐");
  }
  // 컴포넌트가 사라지는 부분
  // 채팅방 나가기
  // api 요청

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));

    // this.setState Component에 있는 내장함수이다 자동으로 사용가능
  };

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트: {this.state.count}</div>
        {/* this.는    */}
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
        <button onClick={this.onClickMove}>나가기 바이바이</button>
      </div>
    );
  }
  // render도 extends Component로 확장했기 떄문에 사용 가능 render 이름 변경 불가
}
