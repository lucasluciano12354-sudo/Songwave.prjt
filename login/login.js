function cadastro(){

const nome=document.getElementById("nome").value;

const senha=document.getElementById("senha").value;

if(nome==""||senha==""){

alert("Preencha todos os campos.");

return;

}

const usuario={

nome,
senha

};

localStorage.setItem("usuario",JSON.stringify(usuario));

localStorage.setItem("logado","true");

window.location.href="../index.html";

}

function login(){

const usuario=JSON.parse(localStorage.getItem("usuario"));

if(!usuario){

alert("Cadastre-se primeiro.");

return;

}

const nome=document.getElementById("nome").value;

const senha=document.getElementById("senha").value;

if(nome==usuario.nome && senha==usuario.senha){

localStorage.setItem("logado","true");

window.location.href="../index.html";

}else{

alert("Usuário ou senha incorretos.");

}

}