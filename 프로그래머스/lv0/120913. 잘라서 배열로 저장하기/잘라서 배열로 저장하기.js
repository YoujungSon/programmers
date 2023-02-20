function solution(my_str, n) {
    let answer = [];
    for(i=0; i< my_str.length ; i+=n){
        console.log(i,n)
        answer.push(my_str.slice(i,i+n))
    }
    
    
    return answer;
}