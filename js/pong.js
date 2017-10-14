$(document).ready(function(){



$("#boxEsquerda").mousemove(function(e){ 

 $("#raqueteEsquerda").css({"top": e.pageY-50}); // tempo da velocidade
});
 
$("#boxDireita").mousemove(function(e){
	
	$("#raqueteDireita").css({"top": e.pageY-50});
	

	});
	
});