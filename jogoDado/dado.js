    /**
 * Estudo da estrutura switchcase e geração de numeros aleatorios
 * @author diegosdomingos
 */
let face = Math.floor(Math.random() * 6) + 1

switch (face) {
    case 1:
        document.getElementById('imgDado').src = "img/face1.png"
        break
    case 2:
        document.getElementById('imgDado').src = "img/face2.png"
        break
    case 3:
        document.getElementById('imgDado').src = "img/face3.png"
        break
    case 4:
        document.getElementById('imgDado').src = "img/face4.png"
        break
    case 5:
        document.getElementById('imgDado').src = "img/face5.png"
        break
    default:
        document.getElementById('imgDado').src = "img/face6.png"
        break
}