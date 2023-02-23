// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  let m = 'fail'

  db.forEach((e) => {
    if (e[0] === id_pw[0]) {
      m = 'wrong pw'
      if (e[1] === id_pw[1]) {
        m = 'login'
      }
    }
  })

  return m
}
