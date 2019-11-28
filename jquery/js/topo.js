/**
 * Função JQuery para voltar ao topo
 * @author diegosdomingos
 */
$(document).ready(function(){

    $('#top').click(function(){
        $('html,body').animate({scrollTop: 0}, 'fast')
    })
})