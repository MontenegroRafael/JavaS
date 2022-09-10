function operacao()
{
    var resp = document.getElementById('resp');
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var mostar='';

    if(document.getElementById('soma').checked)
    mostar = soma(n1, n2);

    if(document.getElementById('subtracao').checked)
    mostar = subtracao(n1, n2);

    if(document.getElementById('multiplicacao').checked)
    mostar = multiplicacao(n1, n2);

    if(document.getElementById('divisao').checked)
    mostar = divisao(n1, n2);

    resp.innerHTML = mostar;
}

function soma(x, y)
{
  return (x+y);
}

function subtracao(x, y)
{
  return (x-y);
}

function multiplicacao(x, y)
{
  return (x*y);
}

function divisao(x, y)
{
  return (x/y);
}