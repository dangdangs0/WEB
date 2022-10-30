console.log(Math.round(1.6)); //반올림. 결과 2
console.log(Math.round(1.4)); //1

function sum(first,second){ //parameter(매개변수)
  console.log('a');
  return first+second; //return 만나면 함수 즉시 종료
  console.log('b');
}

console.log(sum(2,4)); //각각 하나를 argument(인자)
