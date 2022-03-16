// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const solution = (n) => {
//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   return solution(n - 2) + solution(n - 1);
// };

// rl.on('line', (line) => {

//   console.log(solution(line));

//   rl.close();
// }).on('close', () => {
//   process.exit();
// });

const solution = (n) => {
  const arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
};

console.log(solution(10)); // 55
