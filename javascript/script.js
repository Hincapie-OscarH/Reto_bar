function Ingresar(){

    let ID = document.getElementById('ID').value;
    let Names = document.getElementById('Names').value;
    let Age = document.getElementById('Age').value;
    let Email = document.getElementById('Email').value;
    let Phone = document.getElementById('Phone').value;
    let Partner = document.getElementById('Partner').value;
    let Gender = document.getElementById('Gender').value;



    if (Names === "" || ID === "" || Age === "" || Email === "" || Phone === "" || Partner === "" || Gender === ""){
        swal("Todos los campos son necesarios")
    }
    else if(Age < 18 || Age > 80){
        swal({
            title: "Lo sentimos",
            text: "No puede ingresar",
            icon: "error",
          });
    }
    else if (Age < 80 || Age > 18 && Gender === "Hombre"){
        swal({
            title: "Acceso garantizado",
            text: "El valor de la entrada es de $30.000",
            icon: "success",
            button: "Aceptar"
          });
    }
    else if(Age > 18 || Age < 80 && Gender === "Mujer"){
        swal({
            title: "Acceso garantizado",
            text: "El valor de la entrada es de $25.000",
            icon: "success",
            button: "Aceptar"
          });
    }
}


