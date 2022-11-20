/**
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
 * 첫번째 수는 무조건 출력한다.
 */
const solution = (arr) => {
  return [
    arr[0],
    ...arr.filter((ele, idx) => {
      return ele > arr[idx - 1]
    })
  ]
}

let arr = [7, 3, 9, 5, 6, 12]
console.log(solution(arr)) // [7, 9, 6, 12]
