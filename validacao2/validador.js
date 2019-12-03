/**
 * Exemplo de uso de plugin JQuery
 * @author diegosdomingos
 */
 $(document).ready(function(){
     $('#frmCadastro').validate({
         rules:{
            nome:{
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8,                
            },
            passwordConfirm:{
                required: true,
                equalTo: password,
                minlength: 8,
            },
            termos:{
                required: true,
            }

         },
         messages:{
             nome:{
                 required: " O campo nome é obrigatório.",
                 minlength: " O nome deve ter pelo menos 4 caracteres.",
             },
             email:{
                 required: " O campo e-mail é obrigatório.",
                 email: " Formato de e-mail inválido.",
             },
             password:{
                 required: " O campo senha é obrigatório.",
                 minlength: " A senha deve conter no mínimo 8 caracteres.",
             },
             passwordConfirm:{
                 required: " Confirme a senha digitada.",
                 equalTo: " As senhas digitadas não são iguais.",
                 minlength: " A senha deve conter no mínimo 8 caracteres.",
             },
             termos:{
                 required: " Para se cadastrar é necessário aceitar os termos.",
             }
         }
     })
 })
