// https://programmers.co.kr/learn/courses/30/lessons/64061
// 크레인을 움직여 board에서 인형을 뽑아 바구니에 넣는다.
// 바구니에 같은 인형이 2개 쌓이면 터진다.
// 터져서 사라진 인형의 갯수 return

function solution(board, moves) {
  let answer = 0
  const bucket = []

  moves.forEach((position) => {
    // 움직이는 위치는 row 인덱스에서는 -1
    position--

    board.some((row, rowIndex) => {
      const target = row[position]

      // 움직인 위치에 인형이 있을 때
      if (target !== 0) {
        // 바구니 맨 위에 있는 인형을 꺼내서 비교
        const lastItem = bucket.pop()

        if (lastItem === undefined) {
          // 빈 바구니였으면 집은 인형을 바로 넣는다
          bucket.push(target)
        } else if (lastItem !== target) {
          // 다른 인형이면 바구니에서 꺼냈던 마지막 인형을 넣고, 새로 움직여서 꺼낸 인형도 넣는다.
          bucket.push(lastItem)
          bucket.push(target)
        } else {
          // 바구니에 있던 인형과 같다면 터졌기 때문에 터진 인형의 갯수 2개 추가
          answer += 2
        }

        // 인형 꺼낸 위치에 0으로 변경
        board[rowIndex][position] = 0

        // 반복문 종료
        return true
      }
    })
  })

  return answer
}
