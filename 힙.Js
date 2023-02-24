function solution(no, works) {
  const maxH = [null]

  works.forEach((e) => {
    maxH.push(e)
    hSortAfterPush(maxH)
  })
  let after
  let master
  console.log(maxH)
  while (no > 0) {
    if (maxH.length === 1) break

    master = maxH.splice(1, 1)[0]

    if (master === 0) continue
    after = master - 1
    no--
    if (after === 0) continue

    maxH.push(after)
    hSortAfterPush(maxH)
    // break
  }

  if (maxH.length <= 1) return 0

  maxH.shift()

  return maxH.reduce((acc, val) => acc + Math.pow(val, 2), 0)
}

const hShift = (heap) => {
  const master = heap.splice(1, 1)[0]
  // 길이 제한
  let targetIdx = 1
  heap.splice(targetIdx, 0, heap[heap.length - 1])

  //정렬 : 나보다 큰 자식이 있으면 (둘 중에 더 큰 자식과) 자리 바꾸기(계속)
  while (true) {
    if (heap[targetIdx + 2]) {
      const biggerChild =
        heap[targetIdx + 1] > heap[targetIdx + 2]
          ? heap[targetIdx + 1]
          : heap[targetIdx + 2]
      if (biggerChild > heap[targetIdx]) {
        heap.splice(targetIdx, 2, [biggerChild, heap[targetIdx]])
        targetIdx = heap.indexOf(biggerChild)
      } else {
        break
      }
    } else if (heap[targetIdx + 1] && heap[targetIdx + 1] > heap[targetIdx]) {
      heap.splice(targetIdx, 2, [heap[targetIdx + 1], heap[targetIdx]])
      targetIdx = targetIdx + 1
    } else {
      break
    }
  }
  return master
}

const hSortAfterPush = (heap) => {
  let targetIdx = heap.length - 1

  if (targetIdx === 1) return

  let parentIdx = targetIdx % 2 === 0 ? targetIdx / 2 : (targetIdx - 1) / 2
  let parent
  while (heap[parentIdx] < heap[targetIdx]) {
    // 부모가 나보다 클 때까지
    if (targetIdx === 1) break
    // 부모와 나를 바꾼다
    parent = heap[parentIdx]

    if (!parent) break
    heap[parentIdx] = heap[targetIdx]
    heap[targetIdx] = parent
    targetIdx = parentIdx
    parentIdx = targetIdx % 2 === 0 ? targetIdx / 2 : (targetIdx - 1) / 2
  }
}

console.log(solution(4, [4, 3, 3]))
