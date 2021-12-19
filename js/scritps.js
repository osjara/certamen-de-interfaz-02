function dgv(T)    //digito verificador
{ 
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11;
    alert(S?S-1:'k');
 }


 function validar() {
    var rut = document.getElementById("rut").value;
    var valor = rut.replaceAll('.','');
    valor = valor.replace('-','');
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    console.log(cuerpo);
    
    var M=0,S=1;
    for(;cuerpo;cuerpo=Math.floor(cuerpo/10))
    S=(S+cuerpo%10*(9-M++%6))%11;
    if (S) {
        dvComprobado = S -1;
    } else {
        dvComprobado = "K";
    }
    console.log(dvComprobado);
    
    if (dv == dvComprobado) {
        alert("Rut valido");
    }  else {
        alert("Rut Invalido");
        console.log(dv, dvComprobado);
    } 
     
 }