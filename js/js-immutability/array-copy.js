var o1={name:"kim",score:[1,2]};
var o2=Object.assign({},o1);//o1객체 복제
o2.score=o2.score.concat();//concat은 복제하는것
o2.score.push(3);
console.log(o1,o2,o1===o2,o1.score===o2.score);