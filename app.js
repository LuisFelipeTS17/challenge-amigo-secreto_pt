//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let nomeAmigo = amigoInput.value.trim(); // .trim() remove espaços em branco no início e fim

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);

  amigoInput.value = "";

  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para o sorteio!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;
}
