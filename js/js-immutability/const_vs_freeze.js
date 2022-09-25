const o1={name:'kim'};
Object.freeze(o1);
const o2={name:'lee'}
// o1=o2;//const때문에 에러
o1.name='park';
console.log(o1);//freeze때문에 객체 값 안바뀜