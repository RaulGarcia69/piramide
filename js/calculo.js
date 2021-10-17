function calculo() {
    if (document.getElementById("piramide")) {
        document.getElementById("piramide").remove()

    }
    var cuenta = document.getElementById("cuenta").value;
    var form = document.getElementById("formulario");
    var piramide = "";
    var resultado = "";


    var div = "<div id='piramide'>";


    for (var i = 0; i <= cuenta; i++) {
        piramide = piramide + "#";
        resultado = resultado + "<p>" + piramide + "</p>";
    }

    form.innerHTML = form.innerHTML + div + resultado;
    var divcerrar = "</div>";
    var div = document.getElementById("piramide");
    div.innerHTML = div.innerHTML + divcerrar;


}