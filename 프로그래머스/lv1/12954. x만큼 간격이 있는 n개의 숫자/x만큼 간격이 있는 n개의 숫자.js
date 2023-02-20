function solution(x, n) {
    var answer = [];
    for(i=1; i<=n; i++){ // i는 1부터 5까지 하나씩 늘어난다.
        answer.push(x*i) // x와 i의 곱을 answer에 추가해준다.
    }
    return answer;
}