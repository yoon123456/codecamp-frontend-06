/*자연수 뒤집어 배열로 만들기
문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
  n	       return
12345	[5,4,3,2,1]*/

// 내가 푼  풀이
function solution(n) {
  let arr = (n + "")
    .split("")
    .reverse()
    .map((el) => Number(el));
  return arr;
}

// n에 ''를 부여해서 문자열로 만들어주고 split으로 배열에 담아준다 reverse로 배열을 뒤집고 map을 이용해 모두 다 숫자열로 바꿔준다

// 멘토님 풀이     for문을 뒤에서 부터 돌려서 푸는 방법
function solution(n) {
  const answer = [];
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// 멘토님 refactoring
/* String과 toString의 차이점 toString은 변수에만 사용이 가능하다 */
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

/*나누어 떨어지는 숫자 배열
문제 설명
array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

제한사항
arr은 자연수를 담은 배열입니다.
정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
divisor는 자연수입니다.
array는 길이 1 이상인 배열입니다.
입출력 예
    arr    	 divisor  return
[5, 9, 7, 10]	5	[5, 10]
[2, 36, 1, 3]	1	[1, 2, 3, 36]
[3,2,6]	       10	 [-1] */

// 내가 푼 풀이  -실패-
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
    }
  }
}

// 멘토님 풀이
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0
    ? // 빈배열인지 검증할 때는 length를 사용한다
      [-1]
    : answer.sort((a, b) => a - b);
}

// 멘토님 refactoring
function solution(arr, divisor) {
  let answer = arr.filter((num) => {
    console.log(num % divisor, num);
    return num % divisor === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
