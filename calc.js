function soma () {
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;
    var n3 = n1 + n2;
    document.getElementById('resultado').value = n3;

}

function subtracao () {
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;
    var n3 = n1 - n2;
    document.getElementById('resultado').value = n3;

}

function divisao () {
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;
    var n3 = n1 / n2;
    document.getElementById('resultado').value = n3;

}

function multiplicacao () {
    var n1 = +document.getElementById('n1').value;
    var n2 = +document.getElementById('n2').value;
    var n3 = n1 * n2;
    document.getElementById('resultado').value = n3;

}