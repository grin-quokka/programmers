// https://programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수

function solution(s) {
  if (!/[\D]/.test(s) && (s.length === 4 || s.length === 6)) {
    return true;
  } else {
    return false;
  }
}
