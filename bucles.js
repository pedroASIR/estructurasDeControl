$(function () {
    //variable que iniciara la creacion de la tabla
    var tabla = "<table class='table table-bordered table-dark'><caption>Números, sus cuadrados y sus cubos</caption>";

    function crear_tabla() {
        tabla += "<tbody><tr><td>Números</td>";
        bucle_for(); 
        tabla += "</tr><tr><td>Cuadrados</td>";
        bucle_while();
        tabla += "</tr><tr><td>Cubos</td>";
        bucle_dowhile();
        tabla += "</tr></tbody></table>";
        $("#tabla").html(tabla);
    }
    //primera fila de la tabla con bucle for
    function bucle_for() {
        for (var i = 1; i <= 10; i++) {
            tabla += "<td>" + i + "</td>";
        }
    }
    //segunda linea de la tabla con bucle while
    function bucle_while() {
        i = 1;
        while (i <= 10) {
            tabla += "<td>" + Math.pow(i, 2) + "</td>";
            i++;
        }
    }
    //tercera linea de la tabla con bucle do while
    function bucle_dowhile() {
        i = 1;
        do {
            tabla += "<td>" + Math.pow(i, 3) + "</td>";
            i++
        } while (i <= 10);
    }

    crear_tabla();
})
