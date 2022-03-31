export default function Child2(props) {
  return (
    <div>
      <div>자식2의 카운트: {props.count}</div>
      <button onClick={props.onClickCountUP}>카운트올리기</button>
    </div>
  );
}
