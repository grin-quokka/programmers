// https://school.programmers.co.kr/learn/courses/30/lessons/17685

const makeTrie = (words) => {
  const trie = { root: { count: 0, children: new Map() } }
  for (const word of words) {
    let cur = trie.root
    for (const s of word) {
      if (!cur.children.has(s)) {
        cur.children.set(s, { count: 0, children: new Map() })
      }
      cur.children.get(s).count = cur.children.get(s).count + 1
      cur = cur.children.get(s)
    }
  }
  console.log(trie)

  return trie
}

const solution = (words) => {
  const trie = makeTrie(words)
  let cnt = 0
  for (const word of words) {
    let cur = trie.root

    for (const s of word) {
      cnt++

      if (cur.children.get(s).count <= 1) break
      cur = cur.children.get(s)
    }
  }

  return cnt
}
console.log(solution(['go', 'gone', 'guild'])) // 7
