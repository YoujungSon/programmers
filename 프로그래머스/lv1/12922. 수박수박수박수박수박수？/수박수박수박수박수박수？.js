function solution(n) {
    var answer = '';
    var txt1 = "수박"
    var txt2 = "수"
    for(i=0;i<=n;i++){
        if(i % 2 == 0){
            answer = txt1.repeat(i / 2)
        }else{
            answer = txt1.repeat((i-1)/2) + txt2
        }
    }

    return answer;
}