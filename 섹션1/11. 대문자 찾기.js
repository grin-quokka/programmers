function solution(s) {
  let cnt = 0
  for (cur of s) {
    if (cur === cur.toUpperCase()) cnt++
  }
  return cnt
}

function solution2(s) {
  const reg = /[A-Z]/g
  return s.match(reg).length
}

let str = 'KoreaTimeGood'
console.log(solution(str)) // 3
console.log(solution2('QwEdEfRfQQQ')) // 3
