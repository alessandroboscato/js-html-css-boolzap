
$(document).ready(function() {

  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        var inputValue = $("#send-text").val();
        console.log(inputValue);
        if (inputValue.length > 0) {
          var elemento = $(".template").clone();
          elemento.children("p").prepend(inputValue);
          $("main-section-dx").append(elemento);
          $("#send-text").val("");
        }
      }
    }
  )
});


// if (inputValue.length > 0) {
//   var elemento = $(".template").clone();
//   // elemento.prepend(imputValue+" ");
//   ;
// }
