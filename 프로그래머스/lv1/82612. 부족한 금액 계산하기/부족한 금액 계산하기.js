function solution(price, money, count) {
    var answer = 0;
    var num = 0;
    for(i = 1; i <= count; i++){
        num += price * i
    }
    if(money - num < 0){
        return num - money
    }else {
        return 0
    }
}