
function converter() {
    var real = parseFloat(document.getElementById('real').value);
    var taxa = parseFloat(document.getElementById('taxa').value);
    var dolar = real / taxa;
    document.getElementById('resultado').value = dolar;
};
