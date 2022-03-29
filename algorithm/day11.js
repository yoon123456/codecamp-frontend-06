/*문자열 내 p와 y의 개수
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
입출력 예
s	        answer
"pPoooyY"	true
"Pyy"	    false */

// 내가 푼 풀이법
function solution(s) {
  let lower = s.toLowerCase();
  let pCount = "";
  let yCount = "";
  for (i = 0; i < s.length; i++) {
    if (lower[i] === "p") {
      pCount++;
    } else if (lower[i] === "y") {
      yCount++;
    }
  }
  if (pCount === yCount) {
    return true;
  } else {
    return false;
  }
}

// 멘토님 풀이
function solution(s) {
  //p와 y의 갯수를 저장하는 변수
  let p = 0;
  let y = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }
  return p === y;
}

// 멘토님 리펙토링
function solution(s) {
  s = s.toLowerCase();
  //p와 y의 갯수를 저장하는 변수
  let p = 0;
  let y = 0;

  for (i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    } else if (s[i] === "y") {
      y++;
    }
  }
  return p === y;
}

// 멘토님 메서드 풀이     -어려움주의-
function solution(s) {
  //p와 y의 갯수를 저장하는 객체
  const check = {};
  s.toLowerCase() //1. 소문자로 변환
    .split("") //2. 배열로 변환
    .forEach((str) => {
      //3. 배열 메서드인 forEach 사용
      check[str] === undefined
        ? (check[str] = 1) // 없다면 초기값 1로 지정
        : check[str]++; // 있다면 기존 값에 1을 더한다
    });
  return check.p === check.y;
}
//forEach는 return 값이 없다. map은 return값이 있다 이차이가 가장 큰 차이점

/*이상한 문자 만들기
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
입출력 예
         s	              return
"try hello world"	"TrY HeLlO WoRlD"*/

//내가 푼 풀이  -실패-
function solution(s) {
  let arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    let newArr = arr[i];
    let answer = "";
    for (let j = 0; j < newArr.length; j++) {
      if (j % 2 === 0) {
        answer = newArr[j].toUpperCase;
      } else if (j % 2 === 1) {
        answer = newArr[j].toLowerCase;
      }
    }
    return answer.push(F);
  }
  return answer.join("");
}

// 멘토님 풀이
function solution(s) {
  let answer = "";
  //단어별로 인덱스를 구분하기 위한 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      //공백을 만났을 경우
      answer += s[i]; //""
      idx = 0;
    } else {
      answer +=
        idx % 2 === 1
          ? s[i].toLowerCase() // 홀수 일때는 소문자 그대로 넣어준다.
          : s[i].toUpperCase(); // 짝수일 때는 대문자로 변환해서 넣어준다.
      idx++;
    }
  }
  return answer;
}

//멘토님 리팩토링
function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
