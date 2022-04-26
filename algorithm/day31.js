/*
3진법 뒤집기
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.
입출력 예
n	result
45	7
125	229
입출력 예 설명
입출력 예 #1

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
45	1200	0021	7
따라서 7을 return 해야 합니다.
입출력 예 #2

답을 도출하는 과정은 다음과 같습니다.
n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
125	11122	22111	229
따라서 229를 return 해야 합니다.
*/

// 멘토님 풀이
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);
  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}

// 메서드 풀이
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

/*
이진 변환 반복하기
문제 설명
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 150,000 이하입니다.
s에는 '1'이 최소 하나 이상 포함되어 있습니다.
입출력 예
s	             result
"110010101001"	[3,8]
"01110"	        [3,3]
"1111111"	      [4,1]
*/

// 멘토님 풀이
function solution(s) {
  let count = 0; // "1"이 나올 때까지 시도한 횟수
  let remove = 0; // "0"을 제거한 총 횟수

  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    const num = temp.length;
    s = num.toString(2);
  }
  return [count, remove];
}

/*
재귀함수 
자기자신을 계속해서 반복하는 함수
원하는 결과가 나올 때까지 무한하게 반복한다
while 문법을 대체할 수 있다
*/

// 멘토님 풀이
function solution(s) {
  let [count, remove] = [0, 0];
  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    count++;
    // "0" 제거하고 , 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1"만 남긴다.
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);
    return recursion();
  }
  return recursion();
}
