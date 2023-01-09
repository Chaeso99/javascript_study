//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  var answer = 0;
  for (let index = 0; index < n - 1; index++) {
    if (index % 2 == 0) {
      answer = answer + n;
      console.log(answer);
    }
  }
  return answer;
}
