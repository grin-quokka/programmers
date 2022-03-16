const solution = (arr) => {
    const getSum = (otherArr) => otherArr.reduce((prev, cur) => prev + cur, 0);
    const over = getSum(arr) - 100;
    let exceed;
    arr.some((one, idx) => {
      for (let i = idx + 1; i < arr.length; i++) {
        if (one + arr[i] === over) {
          exceed = [one, arr[i]];
          return true;
        }
      }
    });
  
    return arr
      .sort((a, b) => a - b)
      .filter((cur) => {
        if (!exceed.includes(cur)) {
          console.log(cur);
          return true;
        }
      });
  };

// console.log(solution([20, 7, 23, 19, 10, 15, 24, 8, 13]));
console.log(solution([8, 9, 10, 11, 12, 24, 26, 23, 27]));
/*
[7
8,
10,
13,
19,
20,
23]
*/

// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(i => parseInt(i));

// solution(input)
