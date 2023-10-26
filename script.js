const campologin = document.getElementById("login")
const camposenha = document.getElementById("senha")
const camponovologin = document.getElementById("novologin")
const camponovasenha = document.getElementById("novasenha")
const camporepsenha = document.getElementById("repsenha")


 function login() {
  let login = campologin.value;
  let senha = camposenha.value;
  let mensagem = "Usuario ou senha incorreta!";
  let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
  if (bancoDeDados == null) {
   mensagem = "Nenhum usuário cadastrado até o momento";
  } else {
   for (let usuario of bancoDeDados) {
    if (usuario.login == login && usuario.senha == senha) {
     mensagem = "Logado com sucesso!"     
     window.location.href = "./home.html";
     localStorage.setItem("logado", JSON.stringify(usuario));
     break;
    }
   }
  }
  alert(mensagem);


 }
 function cadastro()
 {
  window.location.href = "cadastro.html"
 }