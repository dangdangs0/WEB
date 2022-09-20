var Links={
  setColor:function(color){
    //a태그 전체 선택해서 배열에 넣고 스타일을 변경해주는 것
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length){
    //   alist[i].style.color=color;
    //   i=i+1;
    // }
    $('a').css('color',color)//$뜻은 모든 a태그를 jquery로 제어하겠다
  }
};
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color',color);//모든  body태그에 대해서~
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);//모든 body 태그에 대해서
  }
};
function nightDayHandler(self){
  var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value='day';
      Links.setColor('yellow');
    }
    else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value='night';
      Links.setColor('black');
    }
  }
