# 알고리즘 문제풀이
1.직사각형 별찍기
```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const result = ("*").repeat(a)+("\n") // *을 a번 반복한 후 줄바꿈
    console.log((result).repeat(b)); // result를 b번 반복
});
```
7.음양 더하기
```javascript
function solution(absolutes, signs) {
    var answer = 0;
    var length = absolutes.length;
    for(i = 0; i < length; i++){
        if(signs[i]){ // signs가 참일 경우
            answer += absolutes[i];
        }else { // signs가 거짓일 경우
            answer += (absolutes[i]) *-1; // 음수로 곱한 것을 대입연산자로 더해준다.
        }
    }
    return answer;
}
```
15.내적
```javascript
function solution(a, b) {
    var answer = 0;
    for(i = 0;i < a.length; i++){
        answer += a[i] * b[i] //a의 i번째와 b의 i번째를 곱한 것을 대입연산자로 더해준다.
    }
    return answer;
}
```
