$(document).ready(function() {

    var random = Math.floor(Math.random()*(50-15)+15);
    $("#health-points").text(random);
    $("#magic-points").text(random);
  
}