var score=[1,2,3];
var a=score;
var b=score;
//1억개
// score.push(4);//원본을 바꾸게됨
var score2=score.concat(4);//score복제하고 4 추가해줌
console.log(score,score2,a,b);