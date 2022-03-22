// 리렌더링 돼도 새로 안만들어짐(state가 바뀌면 리렌더링이 일어나는데 그렇다면 계속 FRUITS가 또 만들어지기 때문에 비효율적이라서 export default 밖으로 뻬줌)
// 리액트 훅스인 use로 시작하는애들은 예외로 리렌더링이 되지 않는다  함수형컴포넌트가 생긴이유 리렌더링되어도 안없어지는 특성이있다
const FRUITS = [
    { number: 1, title: "레드향" },         //<div>1 레드향</div>
    { number: 2, title: "샤인머스켓" },      // <div>2 샤인머스켓</div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];



export default function MapFruitsPage(){
    // const aaa =[<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

    // const bbb =["나의레드향","나의샤인머스켓","나의산청딸기"].map((el) => (<div>{el}</div>))

    // const ccc =FRUITS.map((el) => (<div> {el.number} {el.title} </div>))          //태그안에 자바스크립트가 있으면 중괄호로 감싼다
    // 위에서 const ccc로 선언해주기보다는 jsx 부분에 직접표기한다

    return(
        <div>
            {FRUITS.map((el) => (
                <div> {el.number} {el.title} </div>
            ))}
        </div>
    )
}