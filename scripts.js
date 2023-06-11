// scripts.js

// Array com os dados dos desenvolvedores
const desenvolvedores = [
    {
      foto: "imgs/desenvolvedor 1.jpg",
      texto: "Eu sou Davi Assunção dos Santos, tenho 17 anos de idade e tenho a honra de ser um dos desenvolvedores deste site.<br> Além de minha paixão pela programação, sou um grande admirador do futebol e torço fervorosamente pelo maior time do mundo, o Cruzeiro Esporte Clube.<br> Como torcedor dedicado, trago toda essa paixão para o meu trabalho como desenvolvedor, buscando contribuir com o meu melhor para o sucesso deste projeto.<br> Com minha experiência em desenvolvimento web e amor pelo futebol, estou empenhado em proporcionar uma ótima experiência aos visitantes deste site."
    },
    {
      foto: "imgs/desenvolvedor 2.jpg",
      texto:"Eu sou Sofia Pereira Luiz, uma estudante de Tecnologia da Informação (TI) e uma das desenvolvedoras deste site.<br> Estou atualmente cursando o INF3A e tenho uma verdadeira paixão pela área de programação e tecnologia.<br> Busco constantemente novos desafios e oportunidades para aprimorar minhas habilidades como desenvolvedora.<br> Dedico-me com entusiasmo e determinação na criação de soluções eficientes e funcionais neste projeto.<br> Além da minha experiência técnica, valorizo o trabalho em equipe e a capacidade de transformar ideias<br> em realidade por meio do desenvolvimento web. Estou animada em contribuir<br> para proporcionar uma experiência excepcional aos usuários deste site."
    }
  ];
  
  // Variável para controlar o índice do desenvolvedor atual
  let indiceDesenvolvedorAtual = 0;
  
  // Elementos HTML
  const foto = document.getElementById('foto');
  const descricao = document.getElementById('descricao');
  const anteriorBtn = document.getElementById('anterior');
  const proximoBtn = document.getElementById('proximo');
  
  // Função para atualizar as informações do desenvolvedor na página
  function atualizarDesenvolvedor() {
    const desenvolvedor = desenvolvedores[indiceDesenvolvedorAtual];
    foto.src = desenvolvedor.foto;
    descricao.innerHTML = `<h3>Desenvolvedor ${indiceDesenvolvedorAtual + 1}</h3><p>${desenvolvedor.texto}</p>`;
  }
  
  // Função para ir para o próximo desenvolvedor
  function proximoDesenvolvedor() {
    indiceDesenvolvedorAtual = (indiceDesenvolvedorAtual + 1) % desenvolvedores.length;
    atualizarDesenvolvedor();
  }
  
  // Função para ir para o desenvolvedor anterior
  function anteriorDesenvolvedor() {
    indiceDesenvolvedorAtual = (indiceDesenvolvedorAtual - 1 + desenvolvedores.length) % desenvolvedores.length;
    atualizarDesenvolvedor();
  }
  
  // Eventos dos botões
  proximoBtn.addEventListener('click', proximoDesenvolvedor);
  anteriorBtn.addEventListener('click', anteriorDesenvolvedor);
  
  // Atualizar o desenvolvedor inicial
  atualizarDesenvolvedor();

  function doar() {
    var pixImage = document.getElementById("pix-image");
    pixImage.style.display = "block";
  }
  
  
  