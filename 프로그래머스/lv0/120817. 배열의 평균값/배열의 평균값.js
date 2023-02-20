function solution(numbers) {
    var answer = 0;
    numbers.map((v) => {return answer += v})
    answer = answer / numbers.length
    return answer;
}