/**
 * Exemplo de uso de funções jquery se comportando como If Else
 * @author diegosdomingos
 */
$(document).ready(function(){
    $('ul.Destaque li img').hover (function(){
        $('ul.Destaque li img').not(this).stop().fadeTo(400,0.3) /*milisegundos , opacidade*/
    },function(){
        $('ul.Destaque li img').stop().fadeTo(400,1)
    })
})