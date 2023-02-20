function solution(arr) {
    var answer = 0;
    for(i=0;i<arr.length;i++){ //i가 arr의 길이만큼 하나씩 늘어난다.
        answer += arr[i] // arr의 i번째수 합계를 대입연산자로 구한다.
    }
    return answer / arr.length; // arr의 길이로 나눈다.
}