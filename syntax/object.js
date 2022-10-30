var members=['hyejin0','lala','mme'];
console.log(members[1]);//lala. 배열
var i=0;
while(i<members.length){
  console.log('array loop',members[i]);
  i=i+1;
}

var roles={
  'programmer':'hyejin',
  'designer':'lala',
  'manager':'mme'
}
console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
  console.log('object=>',name, 'value=> ',roles[name]);
}
