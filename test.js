// Variables globales
var t;

$(document).ready(function() {
  t = _.template(template_outTable.innerHTML);
  $("button").click(function() {
     calcular();
   });
});


function calcular(){
  target.innerHTML = t( {tabla: [[1, 2], ["a", 3], [0, "56421", "abc"], [3]], wrongs: [1, 1, 0, 0]} );
  
  
};

window.onload = function() {
  if (window.localStorage && localStorage.original) {
    document.getElementById("original").value = localStorage.original;
  }
};