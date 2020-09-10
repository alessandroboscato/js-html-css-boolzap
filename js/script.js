
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
      $("#send-text").val("");
      }
    }
  );

  $("#search-contacts").keyup(
    function() {
       var inputText = $(this).val().toLowerCase();
       var nameContact = $("h4").each(
         function() {
           var nameFound;
           var textContact = $(this).text().toLowerCase();
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

// All'hover sul box contatto cambio il background color

  var hoverContact = $(".box-contact").mouseenter(
    function () {
      $(this).addClass("selected");
    }
  );

  var removeHoverContact = $(".box-contact").mouseleave(
    function () {
      $(this).removeClass("selected");
    }
  );

// Al click sul box contact con l'attributo n mostro la chat corrispondente
  var selectedContact = $(".box-contact").click(
    function() {
      var attribute = $(this).attr("data-contact");
      console.log(attribute);
      var chat = $(".chat").each(
        function() {
          if ($(this).attr("data-contact") == attribute) {
            $(this).addClass("active");
          } else {
            $(this).removeClass("active");
          }
        }
      );

    }
  );

});
//
// ------------------------------------------

function sendMessage() {
  var inputValue = $("#send-text").val();
  if (inputValue != 0) {
    var elemento = $(".template .message").clone();
    elemento.find(".message-text").addClass("sent");
    elemento.find("p").text(inputValue);
    $(".chat.active").append(elemento);
    var time = generateTime();
    elemento.find(".message-time").text(time);
  }
}

function answerMessage() {
  var elemento = $(".template .message").clone();
  elemento.find("p").text("ok");
  $(".chat.active").append(elemento);
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
