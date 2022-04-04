// 클래스형 컴포넌트 만들기 실습

import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // Component를 통해 컴포넌트 기능을 가진 클래스 만들기

  state = {
    count: 0,
  };
  // extends Component로 확장했기 떄문에 state 사용가능 class와는 상관이 없음 state 이름 변경 불가

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));

    // this.setState Component에 있는 내장함수이다 자동으로 사용가능
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        {/* this.는    */}
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
      </div>
    );
  }
  // render도 extends Component로 확장했기 떄문에 사용 가능 render 이름 변경 불가
}
