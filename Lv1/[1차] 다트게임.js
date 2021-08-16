// https://programmers.co.kr/learn/courses/30/lessons/17682
// "점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
// 예) 1S2D*3T
// 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력한다

function solution(dartResult) {
  const result = []

  dartResult.split('').forEach((cur, idx) => {
    const curResultIdx = result.length - 1

    // SDT의 경우 바로 앞이 점수
    let score = Number(dartResult[idx - 1])

    // 점수가 10점인 경우
    if (dartResult[idx - 2] === '1') {
      score = 10
    }

    if (cur === 'S') result.push(score)

    if (cur === 'D') result.push(Math.pow(score, 2)) // 2제곱

    if (cur === 'T') result.push(Math.pow(score, 3)) // 3제곱

    if (cur === '*') {
      result[curResultIdx] *= 2 // 해당 점수 2배

      // 첫번째가 아닐 경우에만
      if (curResultIdx - 1 >= 0) {
        result[curResultIdx - 1] *= 2 // 이전 점수 2배
      }
    }

    if (cur === '#') result[curResultIdx] *= -1
  })

  return result.reduce((acc, cur) => acc + cur, 0) // 총합
}
