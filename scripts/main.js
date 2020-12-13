const urlApi= "";

async function httpPost(uri, object) {
    const response = await fetch(urlApi + uri, {
        method: 'POST',
        body: JSON.stringify(object),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data;
}

async function httpGet(uri) {

    console.log(urlApi + uri);
    const response = await fetch(urlApi + uri, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    const data = await response.json();
    return data;

}

function ValidateMechanic(){
    let identitifation =  document.getElementById('txtIdentification').value;
    
    if (!identitifation){  
        document.getElementById('dvAlert').style.display="block";
        
        document.getElementById("msError").innerHTML = "Ingrese identificación";
        return;
    }
    
    // Aca consultar el api de validación
    //const result = await httpGet(uri);

    const result = true;

    if (result){
        document.getElementById('dvAlert').style.display="none";
        window.location.href = "/views/search.html";
    } else {        
        document.getElementById('dvAlert').style.display="block";
        document.getElementById("msError").innerHTML = "Mecánico no se encuentra verificado";
    }
}

function GetSpareParts(){
    // Aca consultar Datos
    //let spareParts = await httpGet();
    let spareParts = [
        {
            "Name": "Frenos ABS", 
            "Price" : "1500000",
            "Brand" : "Mazda", 
            "Id" : 1, 
            "Quantity" : 10
        },

        {
            "Name": "Frenos ABS", 
            "Price" : "2500000",
            "Brand" : "Toyota", 
            "Id" : 1, 
            "Quantity" : 3
        },

        {
            "Name": "Caja de cambios", 
            "Price" : "2500000",
            "Brand" : "Chevrolet", 
            "Id" : 1, 
            "Quantity" : 5
        }
    ]

    let dataTable = document.querySelector('#data');
    dataTable.innerHTML = "";

    for (let i = 0; i < spareParts.length; i++)       
    {  
        var row = dataTable.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);


        cell1.innerHTML = spareParts[i].Id;
        cell2.innerHTML = spareParts[i].Name;
        cell3.innerHTML = spareParts[i].Brand;
        cell4.innerHTML = spareParts[i].Quantity;
        cell5.innerHTML = '$ ' + spareParts[i].Price;
        
        dataTable.appendChild(row);
    }

    
}

function Register(){

    document.getElementById('dvAlert').style.display="none";
    const data = {
        "Identification": document.getElementById("txtIdentification").value, 
        "Name": document.getElementById("txtName").value, 
        "LastName": document.getElementById("txtLastName").value, 
        "Email" : document.getElementById("txtEmail").value, 
        "Address" : document.getElementById("txtAddress").value       
    }

    console.log(data);

   // let result = await httpPost("register", data);
   let result = true;
   document.getElementById('dvAlert').style.display="block";
   if (result){
        document.getElementById('dvAlertInternal').classList.remove("alert-warning");
        document.getElementById('dvAlertInternal').classList.add("alert-success");
        document.getElementById("msError").innerHTML = "Datos guardados correctamente. # Blockchain 10910101'1";
   } else {        
        document.getElementById('dvAlertInternal').classList.remove("alert-success");
        document.getElementById('dvAlertInternal').classList.add("alert-warning");
        document.getElementById("msError").innerHTML = "Error al registrar";
   }
}

function GoToRegister(){
    window.location.href = "/views/register.html";
}