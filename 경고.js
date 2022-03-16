// https://www.acmicpc.net/problem/3029
const solution = (present, target) => {
  let [phh, pmm, pss] = present.split(':').map((cur) => +cur);
  let [thh, tmm, tss] = target.split(':').map((cur) => +cur);
  let [hh, mm, ss] = [thh - phh, tmm - pmm, tss - pss];

  if (hh < 0) {
    hh = 24 - phh + thh;
  }

  if (mm < 0) {
    mm = 60 - pmm + tmm;
    hh--;
  }

  if (ss < 0) {
    ss = 60 - pss + tss;
    mm--;
  }
  [hh, mm, ss] = [hh, mm, ss].map((cur) => String(cur).padStart(2, '0'));

  console.log(`${hh}:${mm}:${ss}`);
  return `${hh}:${mm}:${ss}`;
};

// console.log(solution('20:00:00', '04:00:00')); //08:00:00
// console.log(solution('12:34:56', '14:36:22')); //02:01:26

let [present, target] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

solution(present, target);
