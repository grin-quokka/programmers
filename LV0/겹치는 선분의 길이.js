// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
    const [a,b,c] = lines
    let s = new Set()
    
    for(let i = a[0]; i < a[1]; i++){
        // a와 b 비교
        if(i >= b[0] && i + 1 <= b[1]) s.add('' + i + (i+1))
        
        // a와 c 비교
        if(i >= c[0] && i + 1 <= c[1]) s.add('' + i + (i+1))
    }
    
    // b와 c비교
    for(let i = b[0]; i < b[1]; i++){
        if(i >= c[0] && i + 1 <= c[1]) s.add('' + i + (i+1))
    }
   
    return s.size
}