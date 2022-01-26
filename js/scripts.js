$(document).ready(function(){
  const age = parseInt(prompt("How old are you?"))








if (age > 18) {
  $('#of-age').show();
} else if (age===18) {
  alert("congradulations".toUpperCase());
  $('#of-age').show();
} else {
  $('#under-age').show();
}
});

$(document).ready(function() {
  $('#formOne').submit(function(event) {
    const drinkAgeInput=$("input#drinkAge").val();
  
  });
});

if (age < 21) {
  $('#drinkage').show();
} else {
  $('#under-21').show();
}

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".Dingo-showing").toggle();
    $(".Dingo-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".bushdog-showing").toggle();
    $(".bushdog-hidden").toggle();
  });
});