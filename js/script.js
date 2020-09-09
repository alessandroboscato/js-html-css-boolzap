
$(document).ready(function() {

  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        var inputValue = $("#send-text").val();
        if (inputValue.length > 0) {
          var elemento = $(".template").clone();
          elemento.addClass("active");
          elemento.find("p").prepend(inputValue);
          $(".main-section-dx").append(elemento);
          $("#send-text").val("");
        }
      }
    }
  )
});

// function sendMessage() {
//   var inputValue = $("#send-text").val();
//   if (inputValue != "") {
//     var templateMessage = $(".template .message").clone();
//     console.log(templateMessage);
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var time = hours + ":" + minutes;
//     templateMessage.find(".message-text").text(inputValue);
//     templateMessage.find(".message-time").text("11:52");
//     templateMessage.addClass("sent");
//     $(".main-section-dx").append(templateMessage);
//     $("#send-text").val("");
//   }
// }
