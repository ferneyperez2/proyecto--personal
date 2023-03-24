function cargar(){

    document.getElementById("text").value="";
    
    }
    function Reiniciar(){
    location.reload();
    }
    
    function calcular(){
  let  resultado = document.getElementById("text").value.split(/,/);
    
    let mayor=-Infinity,menor=+Infinity,suma=0,mitad=0;
    
    //SUMA
    for(i=0;i<resultado.length;i++){
    suma=parseInt(resultado[i])+suma;
    }
    
    //MITAD
    mitad=suma/resultado.length;

    
    // NUMERO MENOR
    for(i=0;i<resultado.length;i++){
    if(parseInt(resultado[i])<menor) menor=resultado[i];
    }
    
    // NUMERO MAYOR
    for(i=0;i<resultado.length;i++){
    if(parseInt(resultado[i])>mayor) mayor=resultado[i];
   
    }
    
    //RESULTADO FINAL
    
    document.getElementById("resultado").innerHTML="La suma es:"+suma+"<br>"+
                                                   "La media es:"+mitad+"<br>"+
                                                   "El mayor es:"+mayor+"<br>"+
                                                   "El menor es:"+menor+"<br>"
    
    }




