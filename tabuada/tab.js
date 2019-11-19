/*
let x=1
while(x < 11){
    let y = 1
    document.write('<p><b>Tabuada do '+x+'</b></p>')    
    while(y < 11) {          
        document.write('<p>'+ x + " x " + y + " = " + (y * x ) + '</p>')
        y++
      }    
    x++
}
*/

let x=1
document.write('<table border=1>')
while(x < 11){
    let y = 1        
    if(x==1){
        imprimirCabec()
    }
    document.write('<tr>')    
    while(y < 11) {          
        document.write('<td align="right">'+ y + " x " + x + " = " + (y * x ) + '</td>')
        y++
      }    
    x++
}

function imprimirCabec(){
let cHtml = ''
let y = 1
while(y < 11) {          
    cHtml += '<th>Tabuada do '+y+'</th>'    
    y++
  }    

document.write('<tr>'+ cHtml +'</tr>')        

}
