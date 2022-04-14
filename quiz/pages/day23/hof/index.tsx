export default function HofPage() {
  // @ts-ignore

  const onClickButton = (el) => (event) => {
    console.log(el);
  };

  return (
    <div>
      <button onClick={onClickButton(123)}>임의의 버튼</button>
    </div>
  );
}
