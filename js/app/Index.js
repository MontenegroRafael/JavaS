function onClickSalvar() {

    let campoNome = document.querySelector('#nome');
    let campoIdade = document.querySelector('#idade');

    if (!campoNome.value) {
        alert('Nome não preenchido;');
        return;
    }

    if (!campoIdade.value) {
        alert('Idade não preeenchida.');
        return;
    }

    var pessoa = {
        nome: campoNome.value,
        idade: campoIdade.value
    };

    let div = document.querySelector('#dadosSalvos');

    div.innerHTML = ' <input disabled value = "' + pessoa.nome + '" />' +
        ' <input disabled value = "' + pessoa.idade + '" /> '
}

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

function onClickSalvar1() {

    let campoNome = document.querySelector('#nome1');
    let campoData = document.querySelector('#data');
    let campoNatura = document.querySelector('#naturalidade');
    let campoPai = document.querySelector('#nomedopai');
    let campoMae = document.querySelector('#nomedomae');

   
    var pessoa1 = {
        Nome: campoNome.value,
        Data: campoData.value,
        Natura: campoNatura.value,
        Pai: campoPai.value,
        Mae: campoMae.value
    };

    let div2 = document.querySelector('#dadosSalvos1');

    div2.innerHTML = ' <input disabled value = "' + pessoa1.Nome + '" /><br >' +
        ' <input disabled value = "' + pessoa1.Data + '" /><br > '+
        ' <input disabled value = "' + pessoa1.Natura + '" /><br > '+
        ' <input disabled value = "' + pessoa1.Pai + '" /><br > '+
        ' <input disabled value = "' + pessoa1.Mae + '" /> '
}

