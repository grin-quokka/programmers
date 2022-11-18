/**
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아
 * 대문자는 소문자로, 소문자는 대문자로 변환하여 출력
 */

const solution = (s) => {
  let result = ''

  for (char of s) {
    result +=
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  }

  return result
}

console.log(solution('StuDY')) // sTUdy
