/**
 * Calculo do IMC
 * @author diegosdomingos
 * @param {*} peso 
 * @param {*} altura 
 */
function calcular(peso, altura){
    let IMC 
    
    peso = Number(peso.replace(",","."))
    altura = Number(altura.replace(",","."))
    IMC = peso/(altura*altura)

    IMC = IMC.toFixed(2).replace(".",",")

    frmIMC.txtIMC.value = IMC
}