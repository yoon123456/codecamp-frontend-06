/*콜라츠 추측
문제 설명
1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
예를 들어, 입력된 수가 6이라면 6→3→10→5→16→8→4→2→1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

제한 사항
입력된 수, num은 1 이상 8000000 미만인 정수입니다.

입출력 예
n	    result
6         8
16	      4
626331   -1 */

// 구글링 후 풀이
function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i);
    }
  }
  return answer - 1;
}

// 멘토님 풀이
function solution(num) {
  let answer = 0;
  for (i = 0; i < 500; i++) {
    //예외 처리는 최상단에서 해주는것이 가장 좋다
    if (num === 1) {
      break;
    }
    answer++;
    // num이 짝수 일 때 : 해당 수에 2를 곱한다
    if (num % 2 === 0) {
      //num = num/2; 아래와 동일한 코드
      num /= 2;
      // num이 홀수 일 때 : 해당 수에 3을 곱한 값에 1을 더한다
    } else {
      num = num * 3 + 1;
    }
  }
  return num !== 1 ? -1 : answer;
}

// refactoring
function solution(num) {
  let answer = 0;
  for (i = 0; i < 500; i++) {
    //예외 처리는 최상단에서 해주는것이 가장 좋다
    if (num === 1) {
      return answer;
    }
    answer++;
    // num이 짝수 일 때 : 해당 수에 2를 곱한다
    if (num % 2 === 0) {
      //num = num/2; 아래와 동일한 코드
      num /= 2;
      // num이 홀수 일 때 : 해당 수에 3을 곱한 값에 1을 더한다
    } else {
      num = num * 3 + 1;
    }
  }
  return -1;
}

// refactoring2
//while문을 사용한 풀이 (무한 루프에 빠지지 않도록 주의한다)
function solution(num) {
  let answer = 0;
  //조건식이 true일 때만 반복 로직이 실행된다 faulthy한 값이 오면 반복을 하지 않거나 중단
  while (num !== 1) {
    // num이 1이 될때 까지 무한으로 실행
    if (answer >= 500) {
      //500번 이상 실행했다면,
      return -1;
    }
    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; // 홀수일 경우
  }
  return answer;
}

// reduce를 사용한 풀이법
function solution(num) {
  let answer = 0;
  // reduce를 사용하려면 배열이 필요하다
  const result = new Array(500).fill(1).reduce((acc) => {
    // cur 이었지만 _를 사용하면 사용하지 않겠다는 뜻이고 아예 빈칸으로 두어도 쓰지 않겠다는 뜻이다
    if (acc !== 1) {
      answer++;
      return acc % 2 === 0
        ? acc / 2 //짝수 일때
        : acc * 3 + 1; //홀수 일때
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}
