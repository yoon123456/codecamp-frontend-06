export default function PromiseAllPage() {
  const onClickPromise = async () => {
    // performance.now()로도 시간 체크 가능하다
    // console.time, console.timeEnd 는 진행시간 확인용 안의 내용이 같아야한다
    console.time("Promise 시작!");
    // promise는 resolve를 기다리는것
    const result1 = await new Promise((resolve, reject) => {
      // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);
    // .then(aaa=>aaa) async/await를 사용하기전에는 .then을 사용했다
    const result2 = await new Promise((resolve, reject) => {
      // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 시작!");
  };

  const onClickPromiseAll = async () => {
    // 1. 하나하나씩 확인하는 방법
    // console.time("PromiseAll 시작");
    // // 배열의 형태로 입력한다 result는 배열의 형태로 담긴다
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     // resolve가 실행되면 promise 종료 / reject가 실행되면 에러
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("PromiseAll 시작");

    // ==================================================== //

    // 2. 한번에 여러개를 확인하는 방법

    console.time("PromiseAll 시작");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("PromiseAll 시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>PromiseAll 연습하기</button>
    </div>
  );
}
