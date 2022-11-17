const aa = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i];
    let cnt = 1;
    for (let j = i; j < arr.length; j++) {
      if (start < arr[j]) {
        start = arr[j];
        cnt++;
      }
    }

    if (result < cnt) result = cnt;
  }

  return result;
};

console.log(aa([5, 3, 7, 8, 6, 2, 9, 4])); // 4
//////////
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  console.log(dy);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}
let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
