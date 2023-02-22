// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const result = [0, 0];
  keyinput.forEach((e) => {
    if (e === "left" && -parseInt(board[0] / 2) < result[0])
      result[0] = result[0] - 1;
    if (e === "right" && parseInt(board[0] / 2) > result[0])
      result[0] = result[0] + 1;
    if (e === "up" && parseInt(board[1] / 2) > result[1])
      result[1] = result[1] + 1;
    if (e === "down" && -parseInt(board[1] / 2) < result[1])
      result[1] = result[1] - 1;
  });

  return result;
}
