// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
function solution(N) {
  if (N % 2 === 0) {
    return (1 + N) * (N / 2)
  }
  return (1 + N - 1) * ((N - 1) / 2) + N
}

console.log(solution(6)) // 21
console.log(solution(10)) // 55
