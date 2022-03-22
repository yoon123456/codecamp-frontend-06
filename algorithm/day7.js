/*문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

제한 조건
num은 int 범위의 정수입니다.
0은 짝수입니다.  */

//내가 푼 풀이
function solution(num) {

    if( num%2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}

solution(3)

//멘토님 풀이1 else를 쓰지 않아도 가능
function solution(num) {
    let answer ="";
    if(num%2 ===0){
      //나머지가 1일 경우에는 홀수
      return "Even";
    }
    //나머지가 1이 아닌 경우(=나머지가 0인 경우)
    answer ="Odd";
  }


//멘토님 풀이2 삼항연산자
function solution(num){
    return num % 2 === 0? "Even" : "Odd";
}

//--------------------------------------------------//

/*문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

제한사항
arr은 길이 1 이상, 100 이하인 배열입니다.
arr의 원소는 -10,000 이상 10,000 이하인 정수입니다. */

//내가 푼 풀이
function solution(arr) {
    let answer=0;
    for(let i=0; i<arr.length; i++ ){
        answer= answer +arr[i]
    }
    return answer/arr.length;
}

//멘토님 풀이
function solution(arr) {
    const answer = arr.reduce((acc,cur)=>{
        return acc + cur;
    }, 0)
    return answer / arr.length
}


//-----------------------------------------------------------//
/*문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다. */

//멘토님 풀이1
function solution(s) {
    //Math.floor = 내림처리(소수점 제거)
    const center = Math.floor(s.length/2);
    let answer = s[center];
    if(s.length % 2 === 0){
        //짝수 문자열일 경우에는 가운데 인덱스부터 앞에 있는 인덱스의 문자까지 추가해서 리턴한다
        answer = s[center -1] + answer;
    }
    return answer;

   
}

//멘토님 풀이2
function solution(s) {
    //Math.floor = 내림처리(소수점 제거)
    const center = Math.floor(s.length/2);
    return s.length % 2         //return s.length % 2 ===1 삼항연산자 이기 때문에 뒤에 ===1 생략 가능
        ? s [center] //홀수 문자열
        : s.slice( center -1 , center +1 )  //짝수 문자열

}


















//------------- map & filter -----------//
//토끼초등학교만 골라낸 후 candy:10 각각 추가하기
const classmates =[
    {name: '철수', age: 10, school: '토끼 초등학교'},
    {name: '영희', age: 13, school: '다람쥐 초등학교'},
    {name: '훈이', age: 11, school: '토끼 초등학교'}
]
  
const rabbit =classmates.filter((el)=>(el.school==="토끼 초등학교"))
  
rabbit.map((el) =>({name:el.name, age:el.age, school:el.school, candy:10}));
  
//다람쥐초등학교만 골라낸 후 name뒤에 "어린이 "붙여주기
const classmates2 =[
    {name: '철수', age: 10, school: '토끼 초등학교'},
    {name: '영희', age: 13, school: '다람쥐 초등학교'},
    {name: '훈이', age: 11, school: '토끼 초등학교'}
  ]
  
const squirrel =classmates.filter((el)=>(el.school==="다람쥐 초등학교"))
  
squirrel.map((el) =>({name:el.name+ "어린이", age:el.age, school:el.school}));
  
//FRUITS에서 짝수만 화면에 띄우기
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
   
    const Even = FRUITS.filter((el)=>(el.number%2 ===0))

    return(
        <div>
            {Even.map((el) => (
                <div> {el.number} {el.title} </div>
            ))}
        </div>
    )
}