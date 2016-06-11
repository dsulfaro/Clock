$(document).ready(function(){
  
  var SI;
  // break
  var startBreak = function(){
    $(".filler").css("background-color", "#d9b38c");
    $("#b").css("font-weight", "bold");
    $("#a").css("font-weight", "normal");
    var start = (parseInt($("#break").html()) * 60) - 1;
    SI = setInterval(function(){
      if (start === 0){
        start = 1;
        $("#timer").text("00:00");
        clearInterval(SI);
      }
      else if (start < 0){
        alert("Time Not Valid");
        clearInterval(SI);
      }
      else{
        if (start < 10){
          $("#timer").text(Math.floor(start / 60) + ":0" + start % 60);
           start -= 1;
        }
        else{
          $("#timer").text(Math.floor(start / 60) + ":" + start % 60);
           start -= 1;
         }
      }
      }, 1000);
  }
  // END break;
  
  // invterval function
  var interval = function(){
    $(".filler").css("background-color", "#B4DC7F");
    $("#a").css("font-weight", "bold");
    $("#b").css("font-weight", "normal");
    var start = (parseInt($("#timer").html()) * 60) - 1;
    SI = setInterval(function(){
      if (start === 0){
        going = true;
        $("#timer").text("00:00");
        clearInterval(SI);
        startBreak();
      }
      else if (start < 0){
        alert("Time Not Valid");
        clearInterval(SI);
      }
      else{
        if (start >= 10){
          $("#timer").text(Math.floor(start / 60) + ":" + start % 60);
            start -= 1;
         }
        else{
          $("#timer").text(Math.floor(start / 60) + ":0" + start % 60);
            start -= 1;
        }
        }
      }, 1000); 
  };
  // END interval function
  
  // set counters
  $('#BP').click(function(){ ($("#break").html(parseInt(($("#break").html())) + 1 + " minutes")); });
  $('#BM').click(function(){ ($("#break").html(parseInt(($("#break").html())) - 1 + " minutes")); });
  $('#SP').click(function(){
    ($("#session").html(parseInt(($("#session").html())) + 1 + " minutes")); 
    $("#timer").html(parseInt($("#session").html()) + ":00");
    clearInterval(SI);
  });
  $('#SM').click(function(){ 
    //clearInterval(SI);
    ($("#session").html(parseInt(($("#session").html())) - 1 + " minutes")); 
    $("#timer").html(parseInt($("#session").html()) + ":00");
    clearInterval(SI);
  });
  // END set counters
  
  // timer
  var going = false;
  $(".filler").click(function(){
    if (!going){
      going = true;
      interval();
     }
    else{
      clearInterval(SI);
      going = false;
    }
  });
  // END timer
  
});