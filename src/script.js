$(function() {
 $(".mol_text").draggable(); 
});

$(".trg > .small").on("click", function() {
 $('textarea').addClass('small');
 $('input.clear').addClass('small');   
});

$(".trg > .nomal").on("click", function() {
  $('textarea').removeClass('small');
  $('input.clear').removeClass('small');
});

$(function() {
 $(".mol_text").each(function(i) {
  let num = $(".mol_text").index(this) + 1;
  $("#kioku" + num).val(localStorage.getItem("kioku" + num));
 });

 $("input.clear").on("click", function() {
  let i = $("input.clear").index(this) + 1;  
  // console.log($(this).data("clear") + i + "が押された");

  const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const arrNum = (arr[i - 1]);               
  const retVal = confirm(arrNum + "を消しマンボ?");
  
  if (retVal == true) {
   alert("闇に葬りマンボ...");
   $("#kioku" + i).val("");
   localStorage.removeItem("kioku" + i);
   $("this").attr("disabled", true);
   document.querySelector("#kioku" + i).value = "";
   return true;
  } else {
   alert("やっぱやめとくわ");
   return false;
  }
  localStorage.removeItem("kioku" + i);
 });

 $("textarea").on("keyup", function() {
  let i = $("textarea").index(this) + 1;
  localStorage.setItem("kioku" + i, $("#kioku" + i).val());
  // console.log($(this).data('kioku') + i + 'が押された');
  $("#message, #message2")
   .fadeIn(300)
   .fadeOut(400);
 });
});
