var $ = function(id) {
    return document.getElementById(id);
};


var sumbitInfo = function() {

var pluralNoun = $("pluralNoun").value;
var noun1 = $("noun1").value;
var noun2 = $("noun2").value;
var song = $("song").value;
var verb = $("verb").value;

$("pluraloutput").innerHTML = pluralNoun.toLowerCase();
$("noun1output").innerHTML = noun1.toLowerCase();
$("noun2output").innerHTML = noun2.toLowerCase();
$("songoutput").innerHTML = song.toLowerCase();;
$("verboutput").innerHTML = verb.toLowerCase();

$("goagain").removeAttribute("hidden");
};

var goAgain = function() {

$("goagain").setAttribute("hidden", "hidden");
$("pluraloutput").innerHTML = "___";
$("noun1output").innerHTML = "___";
$("noun2output").innerHTML = "___";
$("songoutput").innerHTML = "___";
$("verboutput").innerHTML = "___";

$("pluralNoun").value = "";
$("noun1").value = "";
$("noun2").value = "";
$("song").value = "";
$("verb").value = "";

}



window.onload = function() {
$("submit").onclick = sumbitInfo;
$("goagain").onclick = goAgain;
};