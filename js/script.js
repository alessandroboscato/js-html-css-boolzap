
$(document).ready(function() {

  $("#send-text").keydown(
    function(event) {
      if (event.which == 13) {
        var inputValue = $("#send-text").val();

        if (inputValue.lenght > 0) {
          var elemento = $(".template .text-green p").clone();
          $(".template p").append(elemento);
          $("#send-text").val("";)
        }
      }
    }
  )
});
