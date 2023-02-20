function solution(a, b) {
    var answer = 0;

    if(a < b){
        for(i=a; i<=b; i++){
            answer += i
        }
    }else {
        for(i=b; i<=a; i++){
            answer += i
        }
    }
    return answer;
}