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
