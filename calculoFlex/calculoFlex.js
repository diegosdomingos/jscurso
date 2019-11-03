/**
 * Função com objetivo de calcular o combustível mais vantajoso
 * @author diegosdomingos
 */
function calcular(etanol,gasolina){

etanol = Number(etanol.replace(",","."))
gasolina = Number(gasolina.replace(",","."))

if (etanol < gasolina*0.7) {
    document.getElementById("imgFlex").src = 'img/etanol.png'
} else {
    document.getElementById("imgFlex").src = 'img/gasolina.png'
}

}
function limpar(){
    document.getElementById("imgFlex").src = 'img/neutro.png'    
}