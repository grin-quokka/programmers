// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const obj = {}
  array.forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 1
    } else {
      obj[e] = obj[e] + 1
    }
  })

  let maxKey = -1
  let maxCnt = 0
  for ([key, val] of Object.entries(obj)) {
    if (maxCnt < val) {
      maxKey = key
      maxCnt = val
    }
  }

  if (Object.values(obj).filter((e) => e === maxCnt).length > 1) {
    return -1
  }

  return Number(maxKey)
}
