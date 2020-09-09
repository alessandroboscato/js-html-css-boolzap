
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


});

// ------------------------------------------

function sendMessage() {
  var inputValue = $("#send-text").val();
  if (inputValue != 0) {
    var elemento = $(".template .message").clone();
    elemento.find(".message-text").addClass("sent");
    elemento.find("p").text(inputValue);
    $(".main-section-dx").append(elemento);
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;
    elemento.find(".message-time").text(time);
  }
}

function answerMessage() {
  var elemento = $(".template .message").clone();
  elemento.find("p").text("ok");
  $(".main-section-dx").append(elemento);
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = hours + ":" + minutes;
  elemento.find(".message-time").text(time);
}
