// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
function solution(A, B, C) {
  // 1번 풀이
  // const [x, y, z] = [A, B, C].sort((a, b) => a - b)
  // return x + y > z ? 'YES' : 'NO'

  // 2번 풀이
  const max = Math.max(A, B, C) 
  const sum = A+B+C 
 return  sum > max * 2 ? 'YES' : 'NO'
}

console.log(solution(6, 7, 11)) // YES
console.log(solution(13, 33, 17)) // NO
