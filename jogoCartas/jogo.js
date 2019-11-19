/**
 * Exemplo de utilização de array
 * @author diegosdomingos
 */
let faces = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K',]
let nipes = ['♦','♠','♥','♣']
let x = faces[Math.floor(Math.random() * 13)]
let y = nipes[Math.floor(Math.random() * 4)]
document.write(x + y)
