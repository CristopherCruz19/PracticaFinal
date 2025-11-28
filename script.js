function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (!peso || !altura) {
        document.getElementById("resultado").innerHTML = " Debes ingresar peso y altura.";
        return;
    }

    let imc = peso / (altura * altura);
    let interpretacion = "";

    if (imc < 25) {
        interpretacion = "No obeso";
    } else if (imc >= 25 && imc <= 29.9) {
        interpretacion = "Obeso grado 0";
    } else if (imc >= 30 && imc <= 34.9) {
        interpretacion = "Obeso grado 1";
    } else if (imc >= 35 && imc <= 39.9) {
        interpretacion = "Obeso grado 2";
    } else if (imc >= 40) {
        interpretacion = "Obeso grado 3";
    }

    document.getElementById("resultado").innerHTML =
        `IMC: <strong>${imc.toFixed(2)}</strong><br>${interpretacion}`;
}
