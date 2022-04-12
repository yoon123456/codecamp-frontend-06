/*문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
입출력 예
            participant	                                    completion	                      return
["leo", "kiki", "eden"]	                            ["eden", "kiki"]	                         "leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	 "vinko"
["mislav", "stanko", "mislav", "ana"]	            ["stanko", "ana", "mislav"]	                 "mislav"       */

// 내가 푼 풀이

function solution(participant, completion) {
  // let answerP = '';
  // let answerC = '';
  let answer = "";
  // for(i=0; i<participant.length; i++){
  //     answerP = participant[i]
  //     console.log(answerP)
  // }
  // for(j=0; j<completion.length; j++){
  //     answerC = completion[j]
  // }

  participant.map((pa) => {});
  completion.map((co) => {
    if (pa !== co) {
      answer = answer + pa;
    }
    return answer;
  });
}

/* 
splice(배열에서만 사용이 가능하다)
원하는 위치의 데이터를 제거하거나 추가할 수 있다
원본이 저장된다
*/
/*const arr=[1,2,3,4,5]
 arr.splice(1,1) ======> [2]
 arr  =======> [1,3,4,5]   
 자르고 남은 배열은 그대로 유지된다

 const arr2=[1,2,3,4,5]
 arr2.splice(1,1,0) ======> [1,0,3,4,5]*/

// 멘토님풀이
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}

// 멘토님 풀이 2
function solution(participant, completion) {
  const answer = {};
  // 1. 참가한 선수의 이름과 참가자 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }
  // 2. 완주한 명단에서 선수이름을 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}

// 멘토님 풀이 3
function solution(participant, completion) {
  // 참가자 명단을 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1));
  // 완주자 명단을 오름차순으로 정렬
  completion.sort();

  for (let i = 0; i, participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// 멘토님 풀이 4
function solution(participant, completion) {
  // 참가자 명단을 오름차순으로 정렬
  participant.sort((a, b) => (a > b ? 1 : -1));
  // 완주자 명단을 오름차순으로 정렬
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
