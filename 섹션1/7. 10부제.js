// 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다.
// 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.
function solution(day, arr) {
  return arr.filter((cur) => String(cur)[1] === String(day)).length 
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33])) // 3
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30])) // 3
