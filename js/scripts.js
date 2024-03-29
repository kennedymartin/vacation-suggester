// Business (or back-end) logic:

var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

// Everything below this line is user interface (or front-end) logic:


$(document).ready(function(){
  $("form#vacation").submit(function() {
    event.preventDefault();
    var name = ($("#name").val());
    var age = parseInt($("#age").val());
    var number1 = parseInt($("#question4").val());
    var number2 = parseInt($("#question5").val());
    var number3 = parseInt($("#question6").val());
    var result = add(number1, number2, number3);

    if (age >= 80) {
      $(name).insertBefore("#elderly");
      $('#elderly').fadeIn();
      $('#minor').hide();
      $('#cabo').hide();
      $('#sonoma').hide();
      $('#ashland').hide();
    } else if (age < 18) {
      $('#minor').fadeIn();
      $('#elderly').hide();
      $('#cabo').hide();
      $('#sonoma').hide();
      $('#ashland').hide();
    } else if (result <= 4) {
      $('#cabo').fadeIn();
      $('#elderly').hide();
      $('#minor').hide();
      $('#sonoma').hide();
      $('#ashland').hide();
    } else if (result <=7 && result > 4) {
      $('#sonoma').fadeIn();
      $('#elderly').hide();
      $('#minor').hide();
      $('#cabo').hide();
      $('#ashland').hide();
    } else if (result > 7) {
      $('#ashland').fadeIn();
      $('#elderly').hide();
      $('#minor').hide();
      $('#cabo').hide();
      $('#sonoma').hide();
    }

  });
});