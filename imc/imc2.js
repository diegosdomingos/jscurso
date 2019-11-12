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

    if(IMC < 17 ){
        document.getElementById('imgIMC').src = "img/imc1.png"
    } else if (IMC >= 17 && IMC < 18.50){
        document.getElementById('imgIMC').src = "img/imc2.png"
    } else if (IMC >= 18.50 && IMC < 25){
        document.getElementById('imgIMC').src = "img/imc3.png"
    } else if (IMC >= 25 && IMC < 30){
        document.getElementById('imgIMC').src = "img/imc4.png"
    } else if (IMC >= 30 && IMC < 35){
        document.getElementById('imgIMC').src = "img/imc5.png"
    } else if (IMC >= 35 && IMC < 40){
        document.getElementById('imgIMC').src = "img/imc6.png"
    } else {
        document.getElementById('imgIMC').src = "img/imc7.png"
    }                        

    IMC = IMC.toFixed(2).replace(".",",")

    frmIMC.txtIMC.value = IMC
}
/**
 * Calculo do IMC
 * @author diegosdomingos
 */
function limpar(){
    document.getElementById('imgIMC').src = "img/imc.png"  
}