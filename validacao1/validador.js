/**
 * Valida o formulário
 * @author diegosdomingos
 */
function validar(){
    let formulario = document.forms.frmCadastro
    let nome       = formulario.txtNome.value
    let cpf        = formulario.txtCPF.value
    let sexo       = formulario.lblSexo.value
    let perfil     = formulario.txtPerfil.value
    let erro       = false

    if (nome.indexOf(' ')==-1){
        alert('Digite o nome completo.')
    }
    if (cpf.length != 11){
        alert(cpf)
        alert('cpf inválido.')
    }
    if (perfil.length < 20){
        alert('Digite pelo menos 20 caracteres.')
    }

}