/**
 * Menu responsivo usando jquery
 * @author diegosdomingos
 */
$(document).ready(function(){
    $('.Hamburguer').click(function(){
        $('.Menu ul').slideToggle()
    })
    //a função abaixo resolve o problema de sumir o menu 
    //mobile -> desktop
    $(window).resize(function(){
        if($(window).width() >= 480){
            $('.Menu ul').removeAttr('style')
        }
    })
})