# Práctica 02 - Procesadores de Lenguajes#
## 1. Objetivo de la práctica ##

El objetivo de la práctica consiste en realizar un sistema lector de "tablas" *CSV* para poder crear una tabla HTML que se insertará de manera dinámica en la página, usando la librería **underscore**.

Además, se realizará una segunda fase que consistirá en hacer uso de herramientas de pruebas unitarias y expectativas de javascript (*mocha* y *chai*) para comprobar que la tabla se crea correctamente.

## 2. Acceso a la página web ##
Se puede acceder a la página web de *GitHub Pages* alojada en el siguiente enlace:

- [http://alu0100699494.github.io/pl-prct02/](http://alu0100699494.github.io/pl-prct02/)
- [http://alu0100699494.github.io/pl-prct02/tests](http://alu0100699494.github.io/pl-prct02/tests)

## 3. Planteamiento de resolución ##
Para resolver la práctica, se ha propuesto la siguiente resolución:

1. Crear un fichero index.html con una plantilla o *template* de *underscore*, que se usará para crear la tabla una vez leído el cuadro de texto de entrada.
2. Crear un fichero *css* para definir el estilo de la página principal.
3. Crear el fichero *javascript* para manipular la entrada:
	- Primero, se compila la plantilla encontrada en el fichero *index.html*.
	- Segundo, se lee la entrada de *input_text* y se procesa con expresiones regulares.
	- Tercero, se devuelve una tabla con los contenidos a mostrar, y un array con las filas correctas e incorrectas.
	- Finalmente, se aplica la plantilla junto con las tablas y el array y se guarda en *target*, en *index.html*.

## 4. Autores ##
Este proyecto ha sido desarrollado, en conjunto, por:

<!-- Tabla -->
<table cellspacing="0">
  <tr  style="background-color: #E3E3E3;">

    <td> <b>Nombre</b> </td>
    <td> <b>Código alu</b> </td>
	<td> <b>Correo electrónico</b> </td>
  </tr>
  <tr style="background-color: #FFFFFF;">

    <td> Daniel Herzog Cruz </td>
    <td> alu0100699494 </td>
	<td> <a href="mailto:alu0100699494@ull.edu.es">alu0100699494@ull.edu.es</a> </td>
  </tr>
</table>
<!-- Fin tabla -->