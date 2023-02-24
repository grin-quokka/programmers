// https://school.programmers.co.kr/learn/courses/30/lessons/120956
function solution(babbling) {
  const b = ['aya', 'ye', 'woo', 'ma']

  return babbling.filter((e) => {
    for (let i = 0; i < b.length; i++) {
      if (e.includes(b[i])) e = e.replace(b[i], ' ')
    }

    return e.trim().length === 0
  }).length
}
