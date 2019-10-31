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

    media = media.toFixed(1).replace(".",",")

    frmMedia.txtMedia.value = media
}