$(".scroller").click(function(e) {
  e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000 );
});

function startTime() {
  var today = new Date();
  var days = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'};
  var day = days[today.getDay()];
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = " ";
  ampm = checkAmPm(h);
  h = checkTime(h);
  h = reduce(h)
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = day + " - " + h + ampm + " : " + m + " : " + s;
  var t = setTimeout(startTime,0);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
function checkAmPm(i) {
  if (i >= 12) {ampm = "PM"}
  else {ampm = "AM"};
  return ampm;
}
function reduce(i){
  if (i > 12) {i = i - 12}
  return i;
}

$(window).scroll(function(){

  var interestsPosition = $("#education").offset().top - 350;
  var screenPosition = $(window).scrollTop();

  if(screenPosition >= interestsPosition){

    setTimeout(function(){
      $(".edu").removeClass("hide-card");
    }, 300);
  }
});


$(window).scroll(function(){

  var interestsPosition = $("#interests").offset().top - 350;
  var screenPosition = $(window).scrollTop();


  if(screenPosition >= interestsPosition){

    setTimeout(function(){
      $(".coding").removeClass("hide-card");
    }, 300);

    setTimeout(function(){
      $(".chess").removeClass("hide-card");
    }, 600);

    setTimeout(function(){
      $(".cards").removeClass("hide-card");
    }, 900);

    setTimeout(function(){
      $(".vgames").removeClass("hide-card");
    }, 1200);
  }
});

