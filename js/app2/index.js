
//convertendo o texto e adicionando em tela;
function converterParaDomElement(str) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

//pegando os dados do formulário
async function CapturarDadosPessoa(){
  let nome = document.querySelector('#nome').value;  
  console.log(nome);
  let cnh = document.querySelector('#cnh').value;  
  console.log(cnh);
  let dataCadastro = document.querySelector('#dataCadastro').value;  
  console.log(dataCadastro);
  let loginCadastro = document.querySelector('#loginCadastro').value;  
  console.log(loginCadastro);
  
  let cliente = {
    nome,
    cnh,
    dataCadastro,
    loginCadastro
  };
  let SalvarClienteModel = {
    cliente
  };

  console.log(SalvarClienteModel);

  let response = await EnviarApi(SalvarClienteModel);
  console.log(response);
}

//função para fazer uma request na api;
async function EnviarApi(viewmodel){
  
  //opções/dados para fazer a request;
  const options = {
    //método, se é um post, get etc..
    method: 'POST',
    headers:{'content-type':'application/json'},
    //converte o objeto em um Json real;
    body: JSON.stringify(viewmodel) 
  };

  //TODO: mudar a url para o seu localhost.
  const req =  await fetch('https://localhost:44335/cliente/salvar2', options)
  //caso a request dê certo, retornará a resposta;
    .then(response => {      
        response.text()
        .then(data=>  {
          console.log(data);
          return data;
        });
    }) 
  //caso dê erro, irá retornar o erro e mostrar no console
    .catch(erro => {
        console.log(erro);
        return erro;
    });

    return req;
}

// async function Enviar(){
  
//   const dados = {
//     texto : "Olá mundo" 
//   };
//   //opções/dados para fazer a request;
//   const options = {
//     //método, se é um post, get etc..
//     method: 'POST',    
//     //usar este modo para requisições na máquina local;
//     mode: 'no-cors',
//     //converte o objeto em um Json real;
//     body: JSON.stringify(dados)
//   };

//   //TODO: mudar a url para o seu localhost.
//   const req =  await fetch('https://localhost:44335/cliente/salvarviaapi', options )
//   //caso a request dê certo, retornará a resposta;
//     .then(response => {      
//       return response;
//     }) 
//   //caso dê erro, irá retornar o erro e mostrar no console
//     .catch(erro => {
//         console.log(erro);
//         return erro;
//     });

//     return req;
// }