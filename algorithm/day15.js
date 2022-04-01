/*두 정수 사이의 합
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
입출력 예
a	b	return
3	5	12
3	3	3
5	3	12*/

// 내가 푼 풀이
function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      answer = answer + i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      answer = answer + i;
    }
  } else {
    return a;
  }
  return answer;
}

// 멘토님 풀이
function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return b;
  } else {
    // 최소값 (반복문을 실행할때 설정된 초기값: a와 b중 작은 값이 들어옵니다)
    // const min = a> b? b:a
    const min = Math.min(a, b);
    // 최대값 (반복문이 종료되는 조건을 설정 :a와 b중 큰 값이 들어옵니다)
    // const max =a> b ? a: b
    const max = Math.max(a, b);
    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// 멘토님 풀이 2
function solution(a, b) {
  if (a === b) {
    return a;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min + 1).fill(1).reduce((acc, _, i) => {
    const num = min + i;
    return acc + num;
  }, 0);
  return answer;
}

/*정수 제곱근 판별
문제 설명
임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

제한 사항
n은 1이상, 50000000000000 이하인 양의 정수입니다.
입출력 예
n	return
121	144
3	-1
*/

/*
거듭제곱 왼쪽의 숫자를 오른쪽의 숫자만큼 제곱하겠다
2**6
Math.pow(2,6) 
*/

// 멘토님 풀이
function solution(n) {
  var answer = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      //제곱근을 찾은 경우
      answer = i = 1;
      return answer * answer;
    }
  }
  //제곱근을 찾지 못한경우
  return answer;
}

// while 문을 이용한 풀이
function solution(n) {
  let answer = 1; //최초식
  while (answer ** 2 < n) {
    //조건식
    answer++; //증감식
  }
  return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}

/* 
while 문을 사용하는 경우
데이터값이 나올 때 까지 사용한다
무제한으로 답이 나올 때 까지 돌아간다
*/

// 들어온값의 제곱근을 찾아준다
Math.sqrt(num);

// 정수를 판별하는 메서드 정수가 맞다면 true, 틀리면 false
Number.isInteger(num);

// 풀이2
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    //제곱근이 맞는 경우 (=정수인 경우) true 반환
    //sqrt++;
    return (sqrt + 1) ** 2;
  } else {
    //제곱근이 아닌 경우 (=정수가 아닌 경우) false 반환
    return -1;
  }
}

//풀이3
