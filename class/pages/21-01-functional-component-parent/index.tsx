import FunctionalComponentChildPage from "../21-02-functional-component-child";

export default function FunctionalComponentParentPage() {
  // return <FunctionalComponentChildPage count={123} />;
  return <> {FunctionalComponentChildPage({ count: 123 })}</>;
}

// 함수형 컴포넌트는 그냥 함수이다 프롭스는 함수의 매개변수일뿐이기 때문에 이름은 꼭 props가 아니여도 되는구낭
