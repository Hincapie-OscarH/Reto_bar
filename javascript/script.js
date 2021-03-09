function Ejecutar(){

    let nombre1 = document.getElementById('nombre1').value;
    let nombre2 = document.getElementById('nombre2').value;
    let age1 = document.getElementById('age1').value;
    let age2 = document.getElementById('age2').value;
    let time1 = document.getElementById('time1').value;
    let time2 = document.getElementById('time2').value;

    let time1int = Number.parseInt(time1);
    let time2int = Number.parseInt(time2);



    if (nombre1 === "" || nombre2 === "" || age1 === "" || age2 === "" || time1 === "" || time2 === ""){
        swal("Todos los campos son necesarios")
    }
    else if(time1int < time2int){
        swal({
            text: `Nombre: ${nombre1} \nEdad: ${age1} \nTiempo 1/4 milla: ${time1}`,
            icon: "success",
          });
    }
    else if (time1int > time2int){
        swal({
            text: `Nombre: ${nombre2} \nEdad: ${age2} \nTiempo 1/4 milla: ${time2}`,
            icon: "success",
          });
    }
    else{
        swal({
            title: "Es un empate",
            icon: "info",
          });
    }
}


