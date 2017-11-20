

$(document).keypress(function(event){
  //alert(String.fromCharCode(event.which)); 
  if(String.fromCharCode(event.which)=='w')
  $("#raqueteEsquerda").css({"margin-top": -15});
});

	