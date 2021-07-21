// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const maxArr = []
  nums.forEach((cur) => {
    if (maxArr.indexOf(cur) === -1) maxArr.push(cur)
  })
  const half = nums.length / 2
  return half < maxArr.length ? half : maxArr.length
}
