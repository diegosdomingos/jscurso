/**
 * Faz a comparação do jogo jokenpo
 * @author diegosdomingos
 */
function jogar(){
let valJogador = ''

    if (document.getElementById('pedra').checked){
        valJogador = 'pedra'
    } else if (document.getElementById('papel').checked){
        valJogador = 'papel'
    } else {
        valJogador = 'tesoura'
    }
    embaralhar(valJogador)
}
/**
 * Faz o randômico do PC
 * @author diegosdomingos
 */
function embaralhar(valJogador){
let sorteio = Math.floor(Math.random() * 3) + 1
let valPC   = ''

    switch(sorteio){
        case 1:
            document.getElementById('pc').src = 'img/pcpedra.png'
            valPC = 'pedra'
            break
        case 2:
            document.getElementById('pc').src = 'img/pcpapel.png'
            valPC = 'papel'
            break
        default:
            document.getElementById('pc').src = 'img/pctesoura.png'
            valPC = 'tesoura'
            break        
    }

    resultado(valJogador,valPC)
}
/**
 * Mostra o vencedor na tela
 * @author diegosdomingos
 */
function resultado(valJogador,valPC){
    if (valJogador==valPC){
        document.getElementById('resultado').innerText = 'Empate'
    } else if (valJogador == 'pedra' && valPC=='tesoura' ){
        document.getElementById('resultado').innerText = 'Jogador ganhou'
    } else if (valJogador == 'papel' && valPC=='pedra' ){
        document.getElementById('resultado').innerText = 'Jogador ganhou'        
    } else if(valJogador == 'tesoura' && valPC=='papel'){
        document.getElementById('resultado').innerText = 'Jogador ganhou'    
    } else if(valPC == 'pedra' && valJogador=='tesoura'){
        document.getElementById('resultado').innerText = 'PC ganhou'    
    } else if (valPC == 'papel' && valJogador=='pedra' ){
        document.getElementById('resultado').innerText = 'PC ganhou'        
    } else if(valPC == 'tesoura' && valJogador=='papel'){
        document.getElementById('resultado').innerText = 'PC ganhou'    
    }
}
/**
 * Reseta o jogo
 * @author diegosdomingos
 */
function resetar(){
    document.getElementById('papel').checked = false
    document.getElementById('pc').src = 'img/pc.png'
    document.getElementById('resultado').innerText = ''    
}