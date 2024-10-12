document.getElementById('changeJoke').addEventListener('click', function () {
  const jokes = [
    "Cara de quem está pensando se tem tubarão nessa piscina... só para garantir.",
    "Esse é o look oficial de 'nem a água tira meu estilo'.",
    "Quando você tenta ser misterioso na piscina, mas está com medo do seu cabelo molhar.",
    "A cara de quem entrou na água só para tirar uma foto, mas já tá pensando em sair.",
    "Pose de quem finge que está relaxando, mas tá só posando pra foto.",
    "Quando você tenta parecer descolado na piscina, mas tá com medo de molhar os óculos.",
    "Aquela pose de 'tô só de boas', mas na verdade tá pensando em como sair sem derrubar o óculos.",
    "O visual diz 'sou o rei da piscina', mas por dentro tá rezando pra água não estar muito fria.",
    "Quando você leva o óculos de sol pra piscina porque, afinal, estilo nunca tira férias.",
    "Cara de quem tá tentando não demonstrar que está congelando na água."
  ];

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById('jokeText').textContent = randomJoke;
});



//   "A cara de quem acabou de lembrar que esqueceu o feijão no fogo.",
//   "Olha quem está pensando se ainda dá tempo de virar astronauta e fugir da Terra.",
//   "A expressão de quem entrou na cozinha com fome, mas esqueceu o que ia procurar na geladeira.",
//   "Cara de quem ouviu um barulho estranho à noite e agora está tentando lembrar se trancou a porta... ou o espírito já entrou.",
//   "Esse olhar diz tudo: 'Por que inventaram a matemática mesmo?'.",
//   "Aquele momento em que você percebe que o trabalho que você achava que era para amanhã era para hoje... e já passou da meia-noite.",
//   "A cara de quem foi ao médico e ouviu 'relaxa, isso nunca aconteceu antes... comigo também não'.",
//   "Parece que está calculando quantos pedaços de pizza sobraram e se vai precisar lutar por eles.",
//   "O clássico olhar de quem esperou o ônibus por uma hora e quando chegou, percebeu que estava na parada errada.",
//   "Essa é a expressão exata de quando você conta uma piada e ninguém ri... mas você ainda acha que foi genial."