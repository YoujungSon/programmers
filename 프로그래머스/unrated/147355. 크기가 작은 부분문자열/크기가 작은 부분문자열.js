function solution(t, p) {
    let answer = 0;
    const tLength = t.length
    const pLength = p.length
    for(i = 0; i <= (tLength - pLength); i++){
        if(Number(t.slice(i ,pLength + i )) <= Number(p)) { 
            answer++
        }
    }
    return answer;
}