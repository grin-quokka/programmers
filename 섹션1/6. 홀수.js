// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
function solution(arr) {
  const odds = arr.filter((cur) => cur % 2 !== 0)
  return [odds.reduce((prev, cur) => prev + cur), Math.min(...odds)]
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])) // [256, 41]
