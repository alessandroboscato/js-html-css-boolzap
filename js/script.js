
$(document).ready(function() {

  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        sendMessage();
        $("#send-text").val("");
        var answer = setTimeout(answerMessage, 1000);
      }
    }
  );

  $(".send-message").click(
    function() {
      sendMessage();
      var inputValue = $("#send-text").val();
      if (inputValue != 0) {
      var answer = setTimeout(answerMessage, 1000);
      }
    }
  );

  $("#search-contacts").keyup(
    function() {
       var inputText = $("#search-contacts").val().toLowerCase();
       var nameContact = $("h3").each(
         function() {
           var nameFound;
           var textContact = $(this).text().toString().toLowerCase();
           if (textContact.includes(inputText)) {
             nameFound = true;
             $(this).parents(".box-contact").show();
           } else {
             nameFound = false;
             $(this).parents(".box-contact").hide();
           };
           }
       );

      }
  );


});

// ------------------------------------------

function sendMessage() {
  var inputValue = $("#send-text").val();
  if (inputValue != 0) {
    var elemento = $(".template .message").clone();
    elemento.find(".message-text").addClass("sent");
    elemento.find("p").text(inputValue);
    $(".main-section-dx").append(elemento);
    var time = generateTime();
    elemento.find(".message-time").text(time);
  }
}

function answerMessage() {
  var elemento = $(".template .message").clone();
  elemento.find("p").text("ok");
  $(".main-section-dx").append(elemento);
  var time = generateTime();
  elemento.find(".message-time").text(time);
}


function generateTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;
  return time;
}
