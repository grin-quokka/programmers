// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  const n = parseInt(money / 5500)
  return [n, money - 5500 * n]
}
