/*
REGRAS DO JOGO:

- O jogo tem 2 jogadores, jogando em rodadas.
- Em cada turno, um jogador joga um dado quantas vezes ele deseja. Cada resultado é adicionado ao seu resultado ATUAL. MAS, se o jogador jogar um dado 1, todo o seu resultado ATUAL se perde e depois disso é a vez do próximo jogador.
- O jogador pode escolher 'Guardar', o que significa que seu resultado ATUAL é adicionado ao seu score GLOBAL e depois disso, é a vez do próximo jogador.
- O primeiro jogador a alcançar 100 pontos no resultado GLOBAL ganha o jogo.

*/

var scores, roundScore, activeplayer, gamePlaying;

init();

// Adiciona uma escuta de evento ao botão de jogar o dado com função anônima de callback
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        // 1. Pega os números aleatório de 1 a 6
        var dice = Math.floor(Math.random() * 6) + 1;
    
        // 2. Apresenta a imagem do dado e troca de acordo com o número aleatório
        var diceDOM = document.querySelector('.dice');
        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM.style.display = 'block';
        //console.log(dice);

        // 3. Atualiza a pontuação ATUAL se o número do dado não for 1
        if(!(dice === 1)) {

            roundScore += dice;
            document.querySelector('#current-' + activeplayer).textContent = roundScore;

        } else {
            nextPlayer();       
        }
    }
    
});

// Adiciona uma escuta de evento ao botão de guardar pontuação no score Global
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
     
        // Adicionar a pontuação atual a pontuação global do jogador ativo
        scores[activeplayer] += roundScore;
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer];

        // Verifica se o jogador ganhou
        if(scores[activeplayer] >= 100) {
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#name-' + activeplayer).textContent = 'Ganhou';
            document.querySelector('.player-' + activeplayer +'-panel').classList.remove('active');
            document.querySelector('.player-' + activeplayer +'-panel').classList.add('winner');
            gamePlaying = false;
        } else {
            // Passar a vez do jogador
            nextPlayer();    
        }  
        
    }  
    
});

// Adiciona uma escuta de evento ao botão de iniciar um novo jogo
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    
    // Altera o jogador da vez
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        
    // Zera o score atual se o dado for 1
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    // Identifica qual o jogador da vez
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    // Escode o dado a cada vez que trocar de jogador
    document.querySelector('.dice').style.display = 'none';
    
}

function init() {
    
    scores = [0,0]; // index 0 para jogador 1; index 1 para jogador 2
    roundScore = 0;
    activeplayer = 0; // Para jogador 1 o valor é 0; Para jogador 2 o valor é 1
    gamePlaying = true
    
    // Esconde a imagem do dado
    document.querySelector('.dice').style.display = 'none';

    // Zera o scores global e score parcial de ambos jogadores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Jogador 1';
    document.getElementById('name-1').textContent = 'Jogador 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}




