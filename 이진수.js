// https://www.acmicpc.net/problem/3460
// 이진수
// 양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때 1의 위치를 모두 찾는 프로그램을 작성하시오. 최하위 비트(least significant bit, lsb)의 위치는 0이다.

const solution = (n) => {
  let result = [];

  n.toString(2)
    .split('')
    .reverse()
    .forEach((cur, idx) => {
      if (cur === '1') result.push(idx);
    });
  return result.join(' ');
};

// const T = 1;
const n = 13;

console.log(solution(n));
