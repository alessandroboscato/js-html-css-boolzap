
$(document).ready(function() {

  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        sendMessage();
      }
    }
  )

  $(".send-message").click(
    function() {
      sendMessage();
    }
  )
});



function sendMessage() {
  var inputValue = $("#send-text").val();
  if (inputValue != 0) {
    var elemento = $(".template .message").clone();
    elemento.find(".message-text").addClass("sent");
    elemento.find("p").text(inputValue);
    $(".main-section-dx").append(elemento);
    $("#send-text").val("");
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;
    elemento.find(".message-time").text(time);
  }
}
