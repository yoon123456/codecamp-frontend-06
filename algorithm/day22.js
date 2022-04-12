/*모의고사
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]*/

// 멘토님 풀이

// 1번 수포자가 찍는 방식
// 1,2,3,4,5,1,2,3,4,5... 5개씩 반복

// 2번 수포자가 찍는 방식
// 2,1,2,3,2,4,2,5,2,1... 8개씩 반복

// 3번 수포자가 찍는 방식
// 3,3,1,1,2,2,4,4,5,5,3,3,... 10개씩 반복

const answerTable = [
  // 1번 수포자가 찍는 방식 5개
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식 8개
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식 10개
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const answer = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        answer[j]++;
      }
    }
  }
  const biggist = Math.max(...answer);
  const result = [];
  for (let k = 0; k < answer.length; k++) {
    if (answer[k] === biggist) {
      result.push(k + 1);
    }
  }
  return result;
}

// ================ //

// 메서드 풀이
const answerTable = [
  // 1번 수포자가 찍는 방식 5개
  [1, 2, 3, 4, 5],
  // 2번 수포자가 찍는 방식 8개
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번 수포자가 찍는 방식 10개
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    // 찍은 번호가 정답과 일치하는지 확인하고 학생들의 점수를 합산
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });
  const biggist = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  return scoreList
    .filter((el) => {
      return el.score === biggist;
    })
    .map((el) => el.student);
}
