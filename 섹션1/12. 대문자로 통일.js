/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아
 * 대문자로 모두 통일하여 문자열을 출력
 */

const solution = (s) => {
  return s.toUpperCase()
}

let str = 'ItisTimeToStudy'
console.log(solution(str)) // ITISTIMETOSTUDY
