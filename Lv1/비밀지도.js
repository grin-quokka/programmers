// https://programmers.co.kr/learn/courses/30/lessons/17681
// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

function solution(n, arr1, arr2) {
  // 2진수 문자열로 변환
  arr1 = arr1.map((cur) => cur.toString(2).padStart(n, '0'))
  arr2 = arr2.map((cur) => cur.toString(2).padStart(n, '0'))

  return arr1.map((cur, i) => {
    let row = ''
    cur.split('').forEach((str, j) => {
      // 둘다 0일 경우 공백, 이외에는 벽
      row += str === '0' && arr2[i][j] === '0' ? ' ' : '#'
    })
    return row
  })
}
