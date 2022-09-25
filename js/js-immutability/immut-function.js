// function fn(person){
//     person=Object.assign({},person);//원본 복제
//     person.name='lee';
//     return person;
// }

// var o1={name:'kim'};
// var o2=fn(o1);//복제본 바꾼거 리턴

// // var person=o1;
// // person.name='lee';
// // fn(o1);
// console.log(o1,o2);

function fn(person){
    person.name='lee';
}

var o1={name:'kim'};
var o2=Object.assign({},o1);
fn(o2);

console.log(o1,o2);
