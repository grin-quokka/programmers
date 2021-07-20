// https://programmers.co.kr/learn/courses/30/lessons/12916
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.

function solution(s){
    const lower = s.toLowerCase();
    let pCnt = 0;
    let yCnt = 0;
    
    for(let i = 0; i < s.length; i++){
        if(lower[i] === 'p'){
            pCnt++;
        }else if(lower[i] === 'y'){
            yCnt++;
        }
    }
    
    if(pCnt === yCnt){
        return true;
    }else{
        return false;
    }
}