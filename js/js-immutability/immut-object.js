var o1={name:'kim',score:[1,2]};
Object.freeze(o1);
Object.freeze(o1.score);//이렇게 해야 배열도 프리즈
o1.name="lee";
o1.city='seoul';
o1.score.push(3);//배열은 freeze해도 추가됨,, freeze시키면 이제 에러뜸
console.log(o1);