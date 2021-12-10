// https://programmers.co.kr/learn/courses/30/lessons/42583
// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
function solution(bridge_length, weight, truck) {
  // 최초 트럭 갯수
  const truckLength = truck.length;
  let time = 0;
  const bridge = new Array(bridge_length).fill(0);
  const arrived = [];

  // 모두 다리를 건넜을 때까지
  while (arrived.length !== truckLength) {
    time++;

    const last = bridge.pop();
    // 0이 아니라 트럭이면, 다리 건너서 도착
    if (last) arrived.push(last);

    // 다리 위에 올라가있는 무게 총합
    const sum = bridge.reduce((prev, cur) => prev + cur, 0);

    // 새로 트럭이 올라갔을 때 무게를 감당 할 수 있나?
    if (sum + truck[0] <= weight) {
      // 새 트럭 다리에 올라감
      bridge.unshift(truck.shift());
    } else {
      // 빈 공간 추가
      bridge.unshift(0);
    }
  }

  return time;
}
