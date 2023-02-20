function solution(s) {
    var answer = '';
    var length = s.length
    if(length % 2 != 0){ //s의 length가 홀수면
       return s.substr((length-1)/2,1) // length -1 = index / 2, 1글자
       }else { //s의 length가 짝수면
       return s.substr(length/2-1,2) // length -1 = index / 2, 2글자
       }
}