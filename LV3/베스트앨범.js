// https://school.programmers.co.kr/learn/courses/30/lessons/42579
// 해시

function solution(g, p) {
  const best = []
  const m = new Map()

  // 장르별로 구분
  g.forEach((e, idx) => {
    m.set(e, {
      plays: m.get(e)
        ? [...m.get(e).plays, { [idx]: p[idx] }]
        : [{ [idx]: p[idx] }]
    })
  })

  // 재생수의 합 구하기
  m.forEach((val, key, map) => {
    const sum = val.plays
      .map((e) => Object.values(e)[0])
      .reduce((acc, v) => acc + v)

    map.set(key, { ...val, sum })
  })

  const arr = [...m]

  // 재생수로 장르 정렬
  arr.sort((a, b) => b[1].sum - a[1].sum)

  for (val of arr) {
    // 노래마다 재생수로 정렬
    val[1].plays.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])

    // 최대 2개의 곡 넣기
    for (let i = 0; i < 2 && i < val[1].plays.length; i++) {
      best.push(parseInt(Object.keys(val[1].plays[i])[0]))
    }
  }
  return best
}
