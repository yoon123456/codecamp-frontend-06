export default function HofPage() {
  // @ts-ignore

  const onClickChild = (el) => () => () => (event) => {
    el;
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)()()}>
          {el}
        </div>
      ))}
    </div>
  );
}

// 화살표함수에서 ()=> 늘려주면 호출 역시 () 를통해 불러와준다
