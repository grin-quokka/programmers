// https://programmers.co.kr/learn/courses/30/lessons/42748
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

function solution(array, commands) {
  return commands.map((cur) => {
    const [startI, endI, findI] = cur;

    let temp = array.slice(startI - 1, endI).sort((a, b) => a - b);
    return temp[findI - 1];
  });
}
