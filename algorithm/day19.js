/*행렬의 덧셈
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
입출력 예
arr1	             arr2	        return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	      [[3],[4]]	      [[4],[6]]*/

//멘토님 풀이
function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}

//멘토님 메소드 풀이  배열로 받아올 때는 map으로 풀어준다!
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    const result = num1.map((num2, j) => {
      return num2 + arr2[i][j];
    });
    return result;
  });
  return answer;
}

/*2016년
문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
입출력 예
a	b	result
5	24	"TUE" */

//멘토님 풀이
const month1 = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week1 = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;
  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;

  return week[answer % 7];
}

// 멘토님 풀이 2
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week2 = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? //a월 이전일 때
          month[mn]
        : // a월 일때
          b - 1)
    );
  }, 0);
  return week2[answer % 7];
}

// 멘토님 풀이 3
date1 = Date();
date2 = new Date(2016, 5, -1, 24);

typeof date1;

/*date2.getFullYear()  'Thu Apr 07 2022 17:59:15 GMT+0900 (한국 표준시)'
date2.getMonth()+1   2016-05-30T15:00:00.000Z
date2.getDate()      2016
date2.getDay()       5 */

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
