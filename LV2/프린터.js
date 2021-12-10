// https://programmers.co.kr/learn/courses/30/lessons/42587
// 예를 들어, 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.

// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.

// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때, 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.
function solution(p, l) {
  let cnt = 0;

  while (true) {
    let first = p.shift();

    // 중요도가 제일 높지 않다면, 다시 뒤에 넣기
    if (first < Math.max(...p)) {
      p.push(first);
      // 타겟 문서의 위치 조정
      l = l === 0 ? p.length - 1 : l - 1;
    } else {
      // 중요도가 제일 높으면 인쇄
      cnt++;

      // 인쇄한 문서가 타겟 문서라면 종료
      if (l === 0) break;

      // 아니라면 타겟 문서 위치 조정
      l--;
    }
  }

  return cnt;
}
