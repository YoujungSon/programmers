function solution(s) {
    var answer = '';
    s = s.split(" ") //s를 띄어쓰기 기준으로 나눈다.
    for(i = 0;i < s.length; i++){
        answer = s[i].split("") // s의 i번째를 모두 나눈다.
        for(j=0;j<answer.length;j++){
            if(j % 2 == 0){ //j가 짝수라면
                 answer[j] = answer[j].toUpperCase() // 대문자로 바꾼다.
            }else{
                answer[j] = answer[j].toLowerCase() //소문자로 바꾼다.
            }
        }
                s[i] = answer.join("") // 모두합쳐준다.
    }
    return s.join(" ") // 띄어쓰기를 사이에 넣어 합쳐준다.
}