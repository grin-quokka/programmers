// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  const arr = [] // 스택
  let cnt = 0

  for (const el of ingredient) {
    arr.push(el)

    if (el === 1 && arr.slice(-4).join('') === '1231') {
      arr.splice(-4)
      cnt++
    }
  }

  return cnt
}
