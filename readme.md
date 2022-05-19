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
2.짝수와 홀수
```javascript 
function solution(num) {
    var answer = '';
    if(num % 2 == 0){ // num을 2로 나눈 나머지값이 0이면
        answer = "Even" // 짝수
    }else( // 아니면 
        answer = "Odd" // 홀수
    )
    return answer;
}
```
3.가운데 글자 가져오기
```javascript 
function solution(s) {
    var answer = '';
    var length = s.length
    if(length % 2 != 0){ //s의 length가 홀수면
       return s.substr((length-1)/2,1) // length -1 = index / 2, 1글자
       }else { //s의 length가 짝수면
       return s.substr(length/2-1,2) // length -1 = index / 2, 2글자
       }
}
```
4.두 정수 사이의 합
```javascript 
function solution(a, b) {
    var answer = 0;
    var max = Math.max(a,b) //a 와 b 중 최대값
    var min = Math.min(a,b) //a 와 b 중 최소값
    for(i=min;i<= max;i++){ //min가 max까지 하나씩 증가한다.
        answer += i // 대입연산자로 합계 계산
    }
    return answer;
}
```
5.문자열을 정수로 바꾸기
```javascript 
function solution(s) {
    var answer = 0;
    answer = parseInt(s) // 문자열을 정수로 바꿔주는 함수
    return answer;
}
```
6.없는 숫자 더하기
```javascript 
function solution(numbers) {
    var answer = 0;
    
    for(i= 1; i < 10; i++){ //i가 1부터 9까지 하나씩 증가한다.
        if(!numbers.includes(i)){ // numbers가 i를 포함하고 있지 않을 경우
            answer += i // i의 합계를 대입연산자로 구한다.
        }
    }
    return answer;
}
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
8.평균 구하기
```javascript
function solution(arr) {
    var answer = 0;
    for(i=0;i<arr.length;i++){ //i가 arr의 길이만큼 하나씩 늘어난다.
        answer += arr[i] // arr의 i번째수 합계를 대입연산자로 구한다.
    }
    return answer / arr.length; // arr의 길이로 나눈다.
}
```
9.핸드폰 번호 가리기
```javascript
function solution(phone_number) {
    var answer = '';
    answer = ("*").repeat(phone_number.length -4)  // *을 phone_number의 길이에서 4를 뺀만큼 반복한다.
    + phone_number.substr(phone_number.length -4, phone_number.length) // phone_number에서 4를 뺀 숫자 index에서 끝까지를 더한다.
    return answer;
}
```
11.x만큼 간격이 있는 n개의 숫자
```javascript
function solution(x, n) {
    var answer = [];
    for(i=1; i<=n; i++){ // i는 1부터 5까지 하나씩 늘어난다.
        answer.push(x*i) // x와 i의 곱을 answer에 추가해준다.
    }
    return answer;
}
```
12.부족한 금액 계산하기
```javascript
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
```
13.2016년
```javascript
function solution(a, b){
  var answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var date = new Date(2016,a-1,b); //new Date로 날짜를 지정해준다. a는 0부터 시작하기때문에 -1해준다.
  day = date.getDay() // getDay : 요일을 지정해 주는 함수 (0:일요일 부터 시작)
  return answer[day]; //answer에서 day 번째에 있는 요일
}
```
14.나누어 떨어지는 숫자 배열
```javascript
function solution(arr, divisor) {
    var answer = [];
    for(i=0; i < arr.length; i++){ // i는 0부터 arr.length-1까지 하나씩 늘어난다.
        if(arr[i] % divisor == 0){ // arr의 i번째의 수 나누기 divisor 값이 0일 때
            answer.push(arr[i]) // answer에 arr의 i번째 수를 추가한다.
        }
    }
    if(answer.length == 0) { //answer 값이 없을 때
        answer = [-1] // answer 값은 [-1]이 된다.
    }
    return answer.sort((a,b)=> a-b); // answer 값을 오름차순으로 정렬한다. 
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
16.문자열 내 p와 y의 개수
```javascript
function solution(s){
    var answer = true;
    var num1 = 0;
    var num2 = 0;
    s = s.toLowerCase().split("") // 소문자로 바꾼 후 split으로 글자를 쪼개준다.
    for(i=0;i<s.length;i++){ //i가 0부터 s의길이까지 하나씩 늘어난다.
        if(s[i].includes("p")){ // s의 i번째가 p를 포함하고 있다면
            num1 += 1 // 대입연산자로 합계를 구해준다.
        }else if(s[i].includes("y")){ //s의 i번째가 y를 포함하고 있다면
            num2 += 1 // 대입연산자로 합계를 구해준다.
        }
    }
    if(num1 == num2){ //num1의 수와 num2의 수가 같을때
        answer = true
    }else{
        answer = false
    }
    return answer;
}
```
17.문자열 다루기 기본
```
function solution(s) {
    var answer = true;
    var num = s.split("") //s를 모두 분리한다.

    if(!(s.length == 4 || s.length == 6)){ // s의 길이가 4나 6이 아닐때
        return false
    }else { // s의 길이가 4나 6일 때
        for(i=0; i<num.length; i++){ //i는 0부터 num의 길이까지 하나씩 늘어난다.
            if(isNaN(num[i])){ //num의 i번째가 숫자가 아닐 때
                return false
            }
        }
    }
    return answer; //true
}
```
19.수박수박수박수박수박수?
```javascript
function solution(n) {
    var answer = '';
    var txt1 = "수박"
    var txt2 = "수"
    for(i = 0;i <= n; i++){ // i는 0부터 n까지 하나씩 늘어난다.
        if(i % 2 == 0){ // i가 짝수 일 경우 
            answer = txt1.repeat(i / 2) // i 나누기 2 반큼 "수박"을 반복한다.
        }else{
            answer = txt1.repeat((i - 1) / 2) + txt2 //i에서 1을 뺀 만큼 "수박"을 반복하고 "수"를 더해준다.
            }
    }
    return answer;
}
```
