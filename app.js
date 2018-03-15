/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

REGRAS DO JOGO:

- O jogo tem 2 jogadores, jogando em rodadas.
- Em cada turno, um jogador rola um dado quantas vezes ele deseja. Cada resultado é adicionado ao seu resultado ATUAL
- MAS, se o jogador rolar um dado 1, todo o seu resultado ATUAL se perde e depois disso, é a vez do próximo jogador.
- O jogador pode escolher 'Guardar', o que significa que seu resultado ATUAL é adicionado ao seu score GLOBAL e depois disso, é a vez do próximo jogador.
- O primeiro jogador a alcançar 100 pontos no resultado GLOBAL ganha o jogo.

*/

 var scores, roundScore, activeplayer, dice;

scores = [0,0]; // index 0 para jogador 1; index 1 para jogador 2
roundScore = 0;
activeplayer = 0; // Para jogador 1 o valor é 0; Para jogador 2 o valor é 1

// dice/dado recebe um número aleatório de 1 a 6
dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

// Acessando o DOM e selecionado um elemento pelo ID
// textContent não interpreta HTML para isso utiliza-se innerHTML
document.querySelector('#current-' + activeplayer).textContent = dice; 
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + dice + '</em>'; 

// Acessado o DOM por ID e manipulando propriedade CSS
// Escondendo a imagem do DADO
document.querySelector('.dice').style.display = 'none';