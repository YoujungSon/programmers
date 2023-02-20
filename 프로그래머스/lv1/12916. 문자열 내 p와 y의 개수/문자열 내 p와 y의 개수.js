function solution(s){
    var answer = true;
    var num1 = 0;
    var num2 = 0;
    s = s.toLowerCase().split("")
    for(i=0;i<s.length;i++){
        if(s[i].includes("p")){
            num1 += 1
        }else if(s[i].includes("y")){
            num2 += 1
        }
    }
    if(num1 == num2){
        answer = true
    }else{
        answer = false
    }
    return answer;
}