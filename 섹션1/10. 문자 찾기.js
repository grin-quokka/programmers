/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아
 * 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 */

const solution1 = (str, target) => {
  let cnt = 0
  str.split('').map((s) => {
    if (s === target) cnt++
  })

  return cnt
}

const solution2 = (str, target) => {
  const regex = new RegExp(target, 'g'); 
  return str.match(regex).length
}

let str = 'COMPUTERPROGRAMMING'
console.log(solution1(str, 'R'))
console.log(solution2(str, 'R'))
