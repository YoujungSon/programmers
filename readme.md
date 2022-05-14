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
    for(i=0;i<length;i++){
        if(signs[i]){
            answer += absolutes[i];
        }else {
            answer += (absolutes[i]) *-1;
        }
    }
    return answer;
}
```
