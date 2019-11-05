/**
 * 
 */
let chave1 = false
let chave2 = false

function testaChave(chaveClick){

if(chaveClick==1 && !chave1){
    document.getElementById('sw1').src = 'img/swon.png'   
    chave1 = true
} else if (chaveClick==1) {
    document.getElementById('sw1').src = 'img/swoff.png'   
    chave1 = false
}

if(chaveClick==2 && !chave2){
    document.getElementById('sw2').src = 'img/swon.png'   
    chave2 = true
} else if (chaveClick==2) {
    document.getElementById('sw2').src = 'img/swoff.png'   
    chave2 = false
}

if (chave1 && chave2) {    
    document.getElementById('lampada').src = 'img/on.jpg'
} else {    
    document.getElementById('lampada').src = 'img/off.jpg'
}

}