// Variables globales
var t;

$(document).ready(function() {
  t = _.template(template_outTable.innerHTML);
  $("button").click(function() {
     calcular();
   });
});


function calcular(){
  var input_text_str = document.getElementById("input_text").value;
  var table = [];
  var wrong_rows = [];
  parseInput(input_text_str, table, wrong_rows);

  target.innerHTML = t( {tabla: table, wrongs: wrong_rows} );
};

function parseInput(str, table, wrong_rows){
  var regexp = /\s*"((?:[^"\\]|\\.)*)"\s*,?|\s*([^,]+),?|\s*,/g;
  // Separar todas las líneas de la entrada
  var lines = str.split(/\n+\s*/);
  var common_col_size = null;
  
  for(var i in lines){
    var line = lines[i];
    var m = line.match(regexp);
	var row = [];
	
	if(m){
	  if(common_col_size && (common_col_size != m.length)){
	    // Error, tamaño de línea inválido.
		wrong_rows.push(true);
	  }
	  else{
	    common_col_size = m.length;
		wrong_rows.push(false);
	  }
	  // Ahora, limpiamos el contenido del resultado.
	  for(var j in m){
	    m[j] = m[j].replace(/,\s*$/,''); // Quitar las comas
		m[j] = m[j].replace(/^\s*"/,''); // Quitar primera comilla
		m[j] = m[j].replace(/"\s*$/,''); // Quitar última comilla
		m[j] = m[j].replace(/\\"/,'"'); // Reemplazar las comillas escapadas por comillas normales
		
		row.push(m[j]);
	  }
	  table.push(row);
	}
	else{
	  alert('ERROR! La línea ' + line + ' no parece un CSV válido.');
	  wrong_rows[i] = true;
	}
  }
}

window.onload = function() {
  if (window.localStorage && localStorage.original) {
    document.getElementById("original").value = localStorage.original;
  }
};