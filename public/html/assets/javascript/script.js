/* eslint-disable no-undef */
$(document).ready(function() {


    function reset(randomHP,randomMP,randomSTR,randomAGI,randomVIT,randomINT,randomLUC) {
        return function(){
    var randomHP = Math.floor(Math.random()*(50-15)+15);
    var randomMP = Math.floor(Math.random()*(40-12)+11);
    $("#health-points").text(randomHP);
    $("#magic-points").text(randomMP);

    var randomSTR = Math.floor(Math.random()*(18-5)+5);
    var randomVIT = Math.floor(Math.random()*(10-5)+5);
    var randomAGI = Math.floor(Math.random()*(12-5)+5);
    var randomINT = Math.floor(Math.random()*(13-5)+4);
    var randomLUC = Math.floor(Math.random()*(10-5)+5);
    $("#strength").text(randomSTR);
    $("#vitality").text(randomVIT);
    $("#agility").text(randomAGI);
    $("#intelligence").text(randomINT);
    $("#luck").text(randomLUC);
        } 
    }
$("#reset-btn").on("click", reset());

});
