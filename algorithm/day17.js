/*내적
문제 설명
길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

제한사항
a, b의 길이는 1 이상 1,000 이하입니다.
a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
입출력 예
a	             b	   result
[1,2,3,4]	[-3,-1,0,2]	 3
[-1,0,1]	[1,0,-1]	-2 */

// 내가 푼 풀이
function solution(a, b) {
  let answer = 0;
  for (i = 0; i < a.length; i++) {
    console.log(b[i]);
    answer = answer + a[i] * b[i];
  }
  return answer;
}

/* a,b 배열의 길이가 같은 경우 같은 인덱스값으로 접근이 가능하다 */

// 멘토님 풀이
function solution(a, b) {
  let answer = 0;
  for (i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 멘토님 풀이2   reduce를 이용하고 인덱스값도 불러와서 각각 곱하고 더해준다
function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}

/*제일 작은 수 제거하기
문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
입출력 예
   arr	  return
[4,3,2,1]	[4,3,2]
  [10]   	 [-1] */

// 내가 푼 풀이법
function solution(arr) {
  let answer = [];
  answer = arr.sort().splice(1, arr.length).reverse();
  if (answer.length === 0) {
    return [-1];
  } else {
    return answer;
  }
}

// 테스트는 통과했지만 제출에서는 실패했다 접근방식이 완전 잘못되었었다.

// 멘토님 풀이
function solution(arr) {
  const answer = [];
  // 1. 제일 작은 수를 찾아오기
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // 2. 제일 작은 수를 제거
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// 멘토님 풀이2
function solution(arr) {
  // 1. 제일 작은 수를 찾아오기
  const min = Math.min(...arr);
  // 2. 제일 작은 수를 제거
  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length == 0 ? [-1] : answer;
}
