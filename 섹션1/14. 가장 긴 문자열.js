/**
 * N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력
 */

const solution = (str) => {
  const lengthArr = str.map((ele) => ele.length)
  const max = Math.max(...lengthArr)
  const idx = lengthArr.indexOf(max)
  return str[idx]
}

let str = ['teacher', 'time', 'student', 'beautiful', 'good']
console.log(solution(str)) // beautiful
