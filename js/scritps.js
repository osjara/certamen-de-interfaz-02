 const inputRut = document.querySelector(".rut");
 const inputNombre = document.querySelector(".nombre");

 inputRut.addEventListener('change', updateRut);

 function updateRut(e) {
    var rut = e.target.value;
    var valor = rut.replaceAll('.','');
    valor = valor.replace('-','');
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    var M=0,S=1;
    for(;cuerpo;cuerpo=Math.floor(cuerpo/10))
    S=(S+cuerpo%10*(9-M++%6))%11;
    if (S) {
        dvComprobado = S -1;
    } else {
        dvComprobado = "K";
    }
    
    if (dv == dvComprobado) {
        Swal.fire({
            icon: 'success',
            title: 'Validado',
            text: 'Rut Valido',
            showConfirmButton: false,
            timer: 1500
          });
          inputNombre.focus();
    }  else {
        Swal.fire({
            icon: 'error',
            title: 'Invalido',
            text: 'Rut Invalido',
            showConfirmButton: false,
            timer: 1500
          });
          inputRut.value = "";
          inputRut.focus();
    } 

 }

    
function enviar(){
}