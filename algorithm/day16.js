/*음양 더하기
문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
입출력 예
absolutes	       signs	 result
[4,7,12]	[true,false,true]	9
[1,2,3]	    [false,false,true]	0 */

// 구글링 후 문제 풀이
function solution(absolutes, signs) {
  let A = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      A = A + absolutes[i];
    } else {
      A = A - absolutes[i];
    }
  }
  return A;
}

//멘토님 풀이
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

//멘토님 풀이 2
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return answer;
}

//멘토님 풀이 3
function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}

// absolutes의 길이를 구하고 signs의 boolean 값을 비교해 true면 더해주고 false면 빼준다

/*하샤드 수
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
입출력 예
arr	return
10	true
12	true
11	false
13	false */

// 두개만 통과한 문제 풀이
function solution(x) {
  let a = 0;
  const arr = x.toString().split("");
  for (i = 0; i < arr.length; i++) {
    a = a + Number(arr[i]);
    if (a === 1) {
      return true;
    } else if (x % a === 0) {
      return true;
    } else {
      return false;
    }
  }
}

// .toString은 변수에 할당된 데이터만 문자열로 변환할 수 있다

// 멘토님 풀이
function solution(x) {
  let answer = 0;
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0;
}

// 멘토님 풀이를 내가 살짝 바꾼거( 마지막 줄에 내가 읽기 좋으라고 삼항연산자를 추가했다)
function solution(x) {
  let answer = 0;
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0 ? true : false;
}

// 멘토님 풀이 2
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    }, 0);
  return x % answer === 0;
}

// 멘토님 풀이 3
function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return x % answer === 0;
}
