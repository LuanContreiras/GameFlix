var listaJogos = [];
var naTela = document.getElementById("exibirJogos");
var id = 1;

function Adicionar() {
  var nomeAdicionado = document.getElementById("nomeAdicionado");
  var capaAdicionada = document.getElementById("capaAdicionada");

  if (nomeAdicionado.value != "" && capaAdicionada.value != "") {
    const achaNome = listaJogos.find((nome) => {
      return (
        nome.nomeAdicionado.toLowerCase() === nomeAdicionado.value.toLowerCase()
      );
    });
    const achaCapa = listaJogos.find((capa) => {
      return (
        capa.capaAdicionada.toLowerCase() === capaAdicionada.value.toLowerCase()
      );
    });

    if (achaNome || achaCapa) {
      alert("Esse jogo já está na sua biblioteca.");
    } else if (
      capaAdicionada.value.endsWith(".jpg") ||
      (capaAdicionada.value.endsWith(".png") && nomeAdicionado.value !== "")
    ) {
      listaJogos.push({
        id: id,
        capaAdicionada: capaAdicionada.value,
        nomeAdicionado: nomeAdicionado.value
      });
      id++;
      listarJogosNaTela();
    } else {
      alert("Endereço inválido ou nome não preenchido");
    }
  }
  nomeAdicionado.value = "";
  capaAdicionada.value = "";
}

function listarJogosNaTela() {
  var naPagina = "";
  listaJogos.forEach((elem) => {
    naPagina += `
    <div class="divJogos">
    <img src="${elem.capaAdicionada}"> 
    <br><p>${elem.nomeAdicionado}</p>
    <button class="buttonRemove" id="buttonRemove" onclick = "Remover(${elem.id})">Remover</button></div>`;
  });
  naTela.innerHTML = naPagina;
}

function Remover(id) {
  var indice = listaJogos.findIndex((elem) => elem.id === id);
  listaJogos.forEach((elem) => {
    if (elem.id == id) {
      listaJogos.splice(indice, 1);
    }
  });

  listarJogosNaTela();
}

//Desafios concluidos:
//Adicionar nome por meio de outro input
//Botão para remover cada item
//Guarda os jogos todos em uma lista/array