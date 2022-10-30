var fs=require('fs');

// //readFileSync A->B->C 순
// console.log('A');
// var result=fs.readFileSync('syntax/sample.txt','utf8');
// console.log(result);
// console.log('C');

//비동기. A->C->B
console.log('A');
fs.readFile('syntax/sample.txt','utf8',function(err,result){
  console.log(result);
});
console.log('C');
