/*
function dgv(T)    //digito verificador
{ 
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
    S=(S+T%10*(9-M++%6))%11;
    alert(S?S-1:'k');
 }
*/



 const inputRut = document.querySelector(".rut");

 inputRut.addEventListener('change', updateRut);

 function updateRut(e) {
    console.log(e.target.value);
    var rut = e.target.value;
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