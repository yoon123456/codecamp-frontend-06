export default function FunctionalComponentChildPage(aaa) {
  return <div>나의 카운트는 : {aaa.count}</div>;
}

// 사실 props라고 사용하던것은 함수 이기 때문에 aaa로 바꾸어도 정상작동한다
