"use strict"

/* Generar un consecutivo del 1 al 20 */
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

/* Generar en pantalla:
aprendiz 1:
aprendiz 2:
aprendiz 3:...hasta el 20
*/
for (i = 1; i <= 20; i++) {
    console.log("Aprendiz N. " + i);
}

/* Recorriendo arreglos */
/* Forma 1 */
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "Yeimi Katherin";
aprendiz1[2] = "Peña Ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B. Villa del Prado";
aprendiz1[5] = 156;

var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "B. Simón Bolivar", 157);

var aprendiz3 = [3, "Jesus Nicolas", "Ayerbe Guarnizo", 17, "B. Las Palmitas", 177];

console.log("Aprendiz N. 1");
for (i = 0; i <= aprendiz1.length - 1; i++) {
    console.log(aprendiz1[i]);
}




