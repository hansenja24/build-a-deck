
$(document).ready(function() {
  var numbers=["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
  var symbols=["clubs","diamonds","spades","hearts"];
  symbols.forEach(function(symbol) {
    numbers.forEach(function(number) {
      $("#list ul").append("<li>"+number+" of "+symbol+"</li>");
    });
  });
});
