/**
 * 
 */
let chave1 = false
let chave2 = false

function testaChave(chaveClick){
if(chaveClick==1){
    chave1 = !chave1    
    if (chave1){
        document.getElementById('sw1').src = 'img/swon.png'        
    } else {
        document.getElementById('sw1').src = 'img/swoff.png'        
    }
    
} else {
    chave2 = !chave2
    if (chave2){
        document.getElementById('sw2').src = 'img/swon.png'        
    } else {
        document.getElementById('sw2').src = 'img/swoff.png'        
    }
}

if (chave1 && chave2) {    
    document.getElementById('lampada').src = 'img/on.jpg'
} else {    
    document.getElementById('lampada').src = 'img/off.jpg'
}

}