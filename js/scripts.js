$(document).ready(function(){
  $("form#vacation").submit(function() {
    event.preventDefault();
    // var name = ($("#name").val());
    var age = parseInt($("#age").val());

    if (age >= 70) {
      $('#elderly').show();
    }
  });
});