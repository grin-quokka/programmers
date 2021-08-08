//https://programmers.co.kr/learn/courses/30/lessons/42889
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

function solution(N, stages) {
  const stagesRate = []

  for (let i = 1; i <= N; i++) {
    let successCnt = 0
    let challenger = 0
    stages.map((cur) => {
      if (cur > i) successCnt++
      if (cur >= i) challenger++
    })

    stagesRate.push({ stage: i, cnt: successCnt / challenger })
  }

  return stagesRate
    .sort((a, b) => {
      if (a.cnt > b.cnt) {
        return 1
      }
      if (a.cnt < b.cnt) {
        return -1
      }
      return 0
    })
    .map((cur) => cur.stage)
}
