/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
 * 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 */
const solution = (word) => {
  const len = word.length
  if (len % 2 === 0) {
    const mid = Math.floor(len / 2)
    return word[mid - 1] + word[mid]
  }
  return word[Math.floor(len / 2)]
}

console.log(solution('study')) // u
console.log(solution('good')) // oo
