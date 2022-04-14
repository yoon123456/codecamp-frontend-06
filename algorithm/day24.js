/*
피보나치 수
문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

제한 사항
n은 2 이상 100,000 이하인 자연수입니다.

입출력 예
n	return
3	2
5	5
*/

// 멘토님 풀이
// 0, 1, 1, 2, 3, 5 ...

function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}
// number === Int

// 2의 53제곱에서 1을 뺸 값 까지만 허용한다

// 정상적인 범위를 알려주는 메서드
Number.MAX_SAFE_INTEGER;

// 정상적인 범위인지 아닌지를 boolean으로 알려주는 메서드
Number.isSafeInteger();

// 멘토님 풀이
// 0, 1, 1, 2, 3, 5 ...

function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 2번째 피보나치 수의 결과
  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;

    return sum;
  }, sum);
  return answer;
}
