/**
 * 
 */
let chave1 = false
let chave2 = false
let lBrokenLamp = false

function testaChave(chaveClick){

if (!lBrokenLamp){
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
        document.getElementById('and').src = 'img/circ_and_on.png'
        document.getElementById('tab').src = 'img/tabeland_on.png'
    } else {
        if (chave1) {
            document.getElementById('and').src = 'img/circ_and_1.png'
            document.getElementById('tab').src = 'img/tabeland_1.png'
        } else if (chave2) {
            document.getElementById('and').src = 'img/circ_and_2.png'
            document.getElementById('tab').src = 'img/tabeland_2.png'
        } else {
            document.getElementById('and').src = 'img/circ_and_off.png'
            document.getElementById('tab').src = 'img/tabeland_off.png'
        }
        document.getElementById('lampada').src = 'img/off.jpg'
    }
}

}
function quebraLamp(){
    lBrokenLamp = true
    document.getElementById('lampada').src = 'img/broken.jpg'
    document.getElementById('and').src = 'img/falhou.jpg'
    document.getElementById('tab').src = 'img/falhou_tab.png'
}