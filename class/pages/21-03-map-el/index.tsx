export default function MapElPage() {
  // 1. 기본방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el", el);
    console.log("index", index);
  });

  // 2. 매개변수를 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("asdf", asdf);
    console.log("qwer", qwer);
  });

  // 3. 함수선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("asdf", asdf);
    console.log("asdf", qwer);
  });

  // 4. el과 index바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el", el);
    console.log("index", index);
  });

  return <div>el 알아보기 두둥</div>;
}

// map은 함수가 실행하고 만들어진 새로운 배열을 반환하지만 forEach는 새로운 배열을 반환하지는 않는다 하지만 map보다는 빠르다
