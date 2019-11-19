/**
 * Função para calcular desconto sobre preço de venda
  * @author diegosdomingos
 */
let valDesconto = 0
function calcularDesconto(txtTotal,txtDesconto){
    

    txtTotal = Number(txtTotal.replace(",","."))
    txtDesconto = Number(txtDesconto.replace(",","."))

    valDesconto = (txtTotal*txtDesconto)/100
    
    frmPdv.txtDesconto.value = valDesconto.toFixed(2)

    valDesconto = txtTotal - valDesconto

    frmPdv.txtTotalDesconto.value = valDesconto.toFixed(2)
}
/**
 * Função para calcular o troco da venda
  * @author diegosdomingos
 */
function calcularTroco(txtValorPago){
    frmPdv.txtTroco.value = Number(txtValorPago.replace(",","."))-valDesconto    

}