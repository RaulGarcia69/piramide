function calculo() {
    var cuenta = document.getElementById("cuenta").value;
    var piramide = "";
    var resultado = "";
    for (var i = 0; i <= cuenta; i++) {
        piramide = piramide + "#";
        resultado = resultado + "<p>" + piramide + "</p>";
    }
    var form = document.getElementById("piramide");
    form.innerHTML = form.innerHTML + resultado;
}