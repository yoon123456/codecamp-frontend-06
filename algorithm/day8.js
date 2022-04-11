/* 서울에서 김서방 찾기
문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다  */

//내가 푼 풀이
function solution(seoul) {
  let answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은${i}에 있다`;
    }
  }
  return answer;
}

solution(["Jane", "Kim"]);

//멘토님 풀이
function solution(seoul) {
  let x = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      x = i;
      break;
    }
  }
  return `김서방은 ${x}에 있다`;
}

//멘토님 풀이2
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return `김서방은 ${x}에 있다`;
    }
  }
}

//멘토님 풀이3   indexOf는 배열을 순환하며 확인하고 같은게 있으면 그 인덱스번호를 반환
function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다`;
}

/* 문자열 다루기 기본
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.  */

// 내가 푼 풀이  실패
function solution(s) {
  answer = [];
  if (s.length === 4 || s.length === 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++)
    if (typeof s[i] == string) {
      return false;
    } else {
      return true;
    }
  return answer;
}

// NaN  Not a Number

/*  isNaN  
1. 숫자가 맞느지를 검증한다 ===NaN값이 맞는지를 검증 
2. 숫자가 맞다면 false
3. 숫자가 아니라면 true 
4. 숫자 타입으로 변환한다 */
/*  Number.isNaN
1. 숫자가 맞는지를 검증, 들어오는 인자는 오직 숫자타입이어야만 하고 결과가 NaN 값이 맞는지를 검증한다
2. isNaN보디 더 엄격하게 NaN값을 검증한다
Number.isNaN("a123")  true반환됨 를 반환한다 숫자를 넣지 않았기 떄문
Number.isNaN (undefined)   false  */

//멘토님 풀이
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}

//멘토님 풀이 filter를 이용한 풀이
//split()괄호 안의데이터로 배열을 나누는 문법
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((num) => {
    //데이터가 숫자가 아닌 문자일 경우만 남긴다
    //isNaN의 결과가 true값인 경우(NaN값인 경우)

    return isNaN(num) === true;
  });
  return answer.length === 0;
}

/*   약수의 합
   문제 설명
   정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
   
   제한 사항
   n은 0 이상 3000이하인 정수입니다. */

//멘토님 문제 풀이
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i;
    }
  }
  return answer;
}

//멘토님 문제 풀이2
function solution(n) {
  let answer = n;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

//멘토님 문제 풀이3
function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0
      ? //약수가 맞다면 약수를 더한 값을 다음으로 넘겨주고
        acc + (cur + i)
      : // 약수가 아니라면 더하지 않고 그냥 다음으로 넘겨준다
        acc;
  }, 0);
  return answer;
}
//newArray는 새로운 빈배열을 만들어 주는 메서드 .fill()은 괄호 안의 값으로 채워주는 메서드
