// https://programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
  let cnt = 0

  while (num !== 1) {
    if (cnt > 500) {
      break
    }
    cnt++

    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = num * 3 + 1
    }
  }

  return cnt > 500 ? -1 : cnt
}
