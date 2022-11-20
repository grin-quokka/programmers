const solution = (a, b) => {
  const winA = [1, 2, 3]

  return a.map((ele, idx) => {
    if (ele === b[idx]) return 'D'

    if (winA[winA.indexOf(ele) - 1] === b[idx]) return 'A'
    // if (ele - 1 === b[idx]) return 'A'
    // if (ele - 1 === 0 && b[idx] === 3) return 'A'

    return 'B'
  })
}

let a = [2, 3, 3, 1, 3]
let b = [1, 1, 2, 2, 3]
console.log(solution(a, b)) // ['A', 'B', 'A', 'B', 'D']
