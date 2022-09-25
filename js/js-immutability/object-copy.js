var o1={name:'Kim'};
var o2=Object.assign({},o1);//객체 복사
o2.name='lee';
console.log(o1,o2,o1===o2);
