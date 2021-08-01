// a태그 색깔
let Links={
  setColor: function(color){
  //   let a = document.querySelectorAll('a');
  //   let i = 0;
  //   while (i < a.length) {
  //     a[i].style.color = color;
  //     i = i + 1;
  //   }
  $('a').css('color',color);

  //$('a') : 웹페이지에 있는 모든 a태그를 jquery로 제어하겠다는 의미
   }
}

// 전체 body 색깔
let Body={
  setFontColor: function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBgColor: function(color){
    // document.querySelector('body').style.background = color;
    $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
  if (self.value === 'night') {
    Links.setColor('powderblue');
    Body.setBgColor('black');
    Body.setFontColor('white');
    self.value = 'day';
  } else {
    Links.setColor('blue');
    Body.setBgColor('white');
    Body.setFontColor('black');
    self.value = 'night';
  }
}
