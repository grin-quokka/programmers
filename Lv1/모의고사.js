// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const results = []
  const one = [1, 2, 3, 4, 5]
  const two = [2, 1, 2, 3, 2, 4, 2, 5]
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const oneCnt = answers.filter((cur, i) => cur === one[i % one.length]).length
  let twoCnt = answers.filter((cur, i) => cur === two[i % two.length]).length
  let threeCnt = answers.filter(
    (cur, i) => cur === three[i % three.length]
  ).length

  const MAX = Math.max(oneCnt, twoCnt, threeCnt)

  if (oneCnt === MAX) {
    results.push(1)
  }

  if (twoCnt === MAX) {
    results.push(2)
  }

  if (threeCnt === MAX) {
    results.push(3)
  }

  return results
}
