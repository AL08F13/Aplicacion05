// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){//
   $('#btndatos').on('click',function(){
		 $('body').pagecontainer("change","#datos",
		 {transition: "flip"});
   });
//});// 
   $('#btnresultado').on('click',function(){
		 $('body').pagecontainer("change","#resultados",
		 {transition: "flip"});
		 var imc;
	  var peso=$('#txtpeso').val();
	  var talla=$('#txttalla').val();
	  alert(peso);
	  alert(talla);
	  imc=(peso/(talla*talla));
  $('#imc').text('nombre '+$('#txtnombre').val()+' imc= '+imc);  
   });

	  
   });

