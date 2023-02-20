function solution(a, b){
  var answer = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var date = new Date(2016,a-1,b); //new Date로 날짜를 지정해준다. a는 0부터 시작하기때문에 -1해준다.
  day = date.getDay() // getDay 몇번 째 요일인지 가져온다.(일요일 : 0부터 시작)
  return answer[day]; // answer에서 day 번째에 있는 요일
}