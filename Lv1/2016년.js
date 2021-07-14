// https://programmers.co.kr/learn/courses/30/lessons/12901
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
function solution(a, b) {
  const max = [
    [1, 31],
    [2, 29],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
  ];
  const maxMap = new Map(max);
  const day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let days = 0;

  for (let i = 1; i < a; i++) {
    days += maxMap.get(i);
  }

  days += b;

  return day[days % 7];
}
