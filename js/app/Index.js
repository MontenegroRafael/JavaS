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
//function somar() {

//    let campoN1 = document.querySelector('#n1');
//    let campoN2 = document.querySelector('#n2');

//    if (!campoN1.value) {
//        alert('Espaço 1 não preenchido;');
//        return;
//    }

//    if (!campoN2.value) {
//        alert('Espaço 2 não preeenchida.');
//        return;
//    }

//    var operacao = {
//        n1: campoN1.value,
//        n2: campoN2.value
//    };

//    let div = document.querySelector('#operacaoSoma');

//    div.innerHTML = ' <input disabled value = "' + operacao.n1 + '" />' +
//        ' <input disabled value = "' + operacao.n2 + '" /> '
//}

function calculadora(e){

    var operacao = e.value;

    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var calculo = eval(n1 + operacao + n2);

    if (!isNaN(calculo)) {
        alert(calculo);
    }

}