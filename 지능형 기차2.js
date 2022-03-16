// https://www.acmicpc.net/problem/2460
// const solution = (arr) => {
//   let onBoard = 0;
//   const stage = [];

//   arr.forEach((cur) => {
//     const [off, on] = cur;
//     onBoard -= off;
//     onBoard += on;
//     stage.push(onBoard);
//   });

//   return Math.max(...stage);
// };

// console.log(
//   solution([
//     [0, 32],
//     [3, 13],
//     [28, 25],
//     [17, 5],
//     [21, 20],
//     [11, 0],
//     [12, 12],
//     [4, 2],
//     [0, 8],
//     [21, 0]
//   ])
  // );

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solution = (arr) => {
  let onBoard = 0;
  const stage = [];

  arr.forEach((cur) => {
    const [off, on] = cur;
    onBoard -= off;
    onBoard += on;
    stage.push(onBoard);
  });

  return Math.max(...stage);
};

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' ').map((cur) => +cur));
  if (input.length === 10) {
    cnosole.log(solution(input));
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
