function solution(numbers) {
    var answer = 0;
    
    for(i= 1; i < 10; i++){ //i가 1부터 9까지 하나씩 증가한다.
        if(!numbers.includes(i)){ // numbers가 i를 포함하고 있지 않을 경우
            answer += i // i의 합계를 대입연산자로 구한다.
        }
    }
    return answer;
}