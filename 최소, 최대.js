// https://www.acmicpc.net/problem/10818
// 최소, 최대
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

const solution = (arr) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  arr.forEach((cur) => {
    if (min > cur) min = cur;
    if (max < cur) max = cur;
  });

  return [min, max];
};

console.log(solution([20, 10, 35, 30, 7]).join(' '));
