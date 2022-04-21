/*
실패율
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 
그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 
오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

제한사항
스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
stages의 길이는 1 이상 200,000 이하이다.
stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

입출력 예
N	        stages	              result
5	 [2, 1, 2, 6, 2, 4, 3, 3]	 [3,4,2,1,5]
4	      [4,4,4,4,4]	          [4,1,2,3]
*/

//메서드 소개
arr = [1, 2, 3, 4, 2];

arr.indexOf(2, 2);
// 어디서부터 검사할건지 정해준다

arr.lastIndexOf(2);
// 배열의 뒤에서부터 검색한다

arr = [1, 2, 2, 2, 3, 4];

arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
// 이렇게 하면 시작하는 시점과 끝나는 시점을 알 수 있다

// 멘토님 풀이
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);
  let allUsers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map((el) => el.stage);
  return answer;
}
