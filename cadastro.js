const campologin = document.getElementById("login")
const camposenha = document.getElementById("senha")
const camponovologin = document.getElementById("novologin")
const camponovasenha = document.getElementById("novasenha")
const camporepsenha = document.getElementById("repsenha")

function cadastro() {
  if (camponovasenha.value == camporepsenha.value) {
   const usuario = {
    login: camponovologin.value,
    senha: camponovasenha.value
   };

   let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
   if (bancoDeDados == null) {
    bancoDeDados = [];
   }
   bancoDeDados.push(usuario);
   localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
   alert("Usuario cadastrado com sucesso!");

  } else {
   alert("Senhas não coincidem");
  }
 }
 function voltar(){
  window.location.href = "index.html"
 }