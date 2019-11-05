/**
 * Calculo da média
 * @author diegosdomingos
 * @param {*} nota1 
 * @param {*} nota2 
 */
function calcular(nota1, nota2){
    let media 
    
    nota1 = Number(nota1.replace(",","."))
    nota2 = Number(nota2.replace(",","."))
    media = (nota1+nota2)/2

    media = media.toFixed(2)

    if (media >= 5.00) {        
        frmMedia.txtResultado.value = 'Aprovado'
    } else {        
        frmMedia.txtResultado.value = 'Reprovado'
    }

    frmMedia.txtMedia.value = media.replace(".",",")
   
}