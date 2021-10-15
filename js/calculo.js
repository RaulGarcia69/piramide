function calculo() {
    if (document.getElementById("piramide")) {
        document.getElementById("piramide").remove()
    } else {
        var cuenta = document.getElementById("cuenta").value;
        var piramide = "";
        var resultado = "";
        for (var i = 0; i <= cuenta; i++) {
            piramide = piramide + "#";
            resultado = resultado + "<p id='piramide'>" + piramide + "</p>";
        }
        var form = document.getElementById("formulario");
        form.innerHTML = form.innerHTML + resultado;
    }

}