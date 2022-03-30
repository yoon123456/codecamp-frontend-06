/* 문자열 내림차순으로 배치하기
문제 설명
문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

제한 사항
str은 길이 1 이상인 문자열입니다.
입출력 예
    s	      return
"Zbcdefg"	"gfedcbZ" */

//구글링 후의 문제풀이
function solution(s) {
  const arr = s.split("").sort().reverse().join("");
  return arr;
}
// 1. 문자열을 배열로 바꿔준다 배열로 바꿔주기 위해 split("")을 사용한다 이 뜻은 ""으로 문자열을 하나씩 나눠서 배열에 담아준다는 뜻이다
// 2. sort()는 담아준 배열을 작은 것부터 정렬한다 -> 오름차순으로 자동정렬
//    sort()는 배열에만 사용이 가능하다
// 3. reverse()를 통해 배열의 순서를 뒤집어 준다 -> 내림차순으로 변경된다
// 4. join("")을 통해 배열을 문자열로 다시 합쳐준다
// **참고**  .toUpperCase를 통해서 대문자로의 변환이 가능하고 .toLowerCase()로 소문자로의 변환이 가능하다

//멘토님 풀이
/* 아스키코드
1. 아스키코드 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다
2. 문자열끼리 비교할 떄는 유니코드의 번호를 가지고 대소관계를 비교한다*/
"a".charCodeAt(); // 소문자 a의 유니코드 번호 -> 97
"b".charCodeAt(); // 소문자 a의 유니코드 번호 -> 98
//알파벳 소문자의유니코드 95~122
//알파벳 대문자의 유니코드 65~90
arr = ["a", "b", "Z", "c"];

arr.sort((a, b) => {
  return a > b ? 1 : -1; //오름차순
  return a < b ? -1 : 1; //오름차순

  return a > b ? -1 : 1; //내림차순
  return a < b ? 1 : -1; //오름차순
});

function solution(s) {
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
  }
  answer.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  let result = "";
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}

function solution(s) {
  const answer = s
    .split("")
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");

  return answer;
}

//-----------------------------------------------------------------------------------------//

/*K번째수
문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.
입출력 예
        array	                    commands	             return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다. */

//내가 도전한 방법
function solution(array, commands) {
  let answer = [];
  const s = array.split("");
  const commands1 = commands[0];
  const commands2 = commands[1];
  const commands3 = commands[2];

  const a = commands1.split("");
  console.log(commands);

  const newArr = array.slice(1, 5).sort();
  newArr;

  return newArr;
}
// array를 slice로 나누고 sort로 다시 배열 한 후 k번째 숫자를 찾으려 했는데 접근 방식이 어려워,,

//
array = [1, 2, 10, 100, 1000, 3];
arr.sort(); // 문자열 정렬 시 앞자리수만 비교하여 정렬한다

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];
    // array를 i번째 부터 j까진 자른 결과를 저장
    const result = array.slice(i - 1, j).sort((a, b) => {
      return a - b;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}

function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b; //오름차순
    });
    console.log(result, el[2]);
    return result[el[2] - 1];
  });
  return answer;
}
