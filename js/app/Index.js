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

var modal = document.getElementById('formulario');

var btn = document.getElementsByClassName('add_table')[0];

var close = document.getElementsByClassName("close")[0];

var edit = document.getElementsByClassName("fa fa-pencil-square-o");

var input = document.getElementsByTagName("input");

var option = document.getElementsByTagName("option");

function clearContents(){
    modal.style.top = "-200%";
    modal.style.background = "rgba(0,0,0,0.0)";
    modal.style.zIndex = -1;
    document.getElementById('title-form').innerHTML = "Cadastro de novo Usuário";
    document.getElementsByName("action")[0].value = "create";
    for(x=0;x<input.length-1;x++){
        input[x].value = "";
    }
    for(x=0;x<option.length;x++){
    	option[x].selected = false;
    }
 }

btn.onclick = function() {
    modal.style.zIndex = 1;modal.style.top = 0;
    modal.style.background = "rgba(0,0,0,0.8)";
}

close.onclick = function() {
	clearContents();
}

window.onclick = function(event) {
    if (event.target == modal) {
        clearContents();
    }

}
