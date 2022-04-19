/*
숫자 문자열과 영단어
문제 설명

네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.

숫자	영단어
0	zero
1	one
2	two
3	three
4	four
5	five
6	six
7	seven
8	eight
9	nine
*/

/* 
replace
1. 문자열 메서드
2. 첫번째 인자의 데이터값과 같은 값을 찾아서 두번째 인자의 데이터값으로 변경 
3. 앞에서부터 찾을때 중복된 데이터값중 앞의 데이터만 바꿔준다 그럴 때 해결 할 수 있는 메서드는 .replaceAll()

replaceAll
1. 첫번째 인자의 데이터값과 같은 모든 값을 찾아서 두번째 인자의 데이터값으로 변경 
2. 최신문법이기 떄문에 사용가능한 곳에서만 쓸 수 있음
*/

str = "12345";

str.replace("2", "0");

str = "123452";

str.replaceAll("2", "0");

// 멘토님 풀이
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

// replaceAll 풀이
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    s = s.replaceAll(numbers[i], i);
  }
  return Number(s);
}

// forEach
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  numbers.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// 정규표현식 사용 풀이

function solution(s) {
  // 정규표현식
  // 슬래시(/) 열고 슬래시(/)닫고 슬래시 안에 검증하는 문자열을 추가한다
  // g 명령어는 전역 검색을 의미한다.(replaceAll 과 같은 동작을 수행한다)

  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);
  return Number(s);
}

// 정규표현식 for문 사용
const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
