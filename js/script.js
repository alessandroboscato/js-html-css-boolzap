
$(document).ready(function() {
//genero un numero random per l'ultimo accesso del contatto e lo stampo nel DOM
  $(".contact-time").each(
    function() {
      var randomNumber = randomHour();
      $(this).text(randomNumber);
    }
  )
//ordino i contatti in base all'ultimo accesso effettuato
  var contactList = $(".contact-time").each(
    function() {
      var contact = $(this).text()
      console.log(contact);
    }
  );


  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        sendMessage();
        var inputValue = $("#send-text").val();
        if (inputValue != 0) {
          var answer = setTimeout(answerMessage, 1000);
        }
        $("#send-text").val("");
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

// Menù tendina

  $(document).on("click", ".msg-option",
    function () {
      $(this).siblings(".message-menu").toggle();
      if ($(this).parent(".message-text").hasClass("sent")) {
        $(this).addClass("message-sent");
      }
    }
  );

  $(document).on("click", ".delete-msg",
    function() {
      $(this).parents(".message").remove();
    }
  );


// Al click sul box contact attribute "n" mostro la chat "n" corrispondente
  var selectedContact = $(".box-contact").click(
    function() {
      var attribute = $(this).attr("data-contact");
      var nameContact = $(this).find("h4").text();
      var chat = $(".chat").each(
        function() {
          if ($(this).attr("data-contact") == attribute) {
            $(this).addClass("active");
            $(this).siblings(".header-top").find("h4").text(nameContact);
            $(this).siblings(".header-top").find("img").attr("src", "img/avatar_"+attribute+".jpg")
          } else {
            $(this).removeClass("active");
          }
        }
      );

    }
  );

//FUNCTIONS
//funzione di invio messaggio
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
//funzione di risposta del bot
  function answerMessage() {
    var elemento = $(".template .message").clone();
    elemento.find("p").text("ok");
    $(".chat.active").append(elemento);
    var time = generateTime();
    elemento.find(".message-time").text(time);
  }
//funzione che genera l'ora attuale
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
//funzione che genera l'orario casuale dell'ultimo accesso del contatto
  function randomHour() {
    //genero un numero da 0 a 23
    var hours = Math.floor(Math.random() * 24);
    var minutes = Math.floor(Math.random() * 60);
    if (hours < 10 ) {
      hours = "0" + hours;
    };
    if (minutes < 10) {
      minutes = "0" + minutes;
    };
    var time = hours + ":" + minutes;
    return time;
  }

});
