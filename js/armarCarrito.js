"use strict"
document.querySelector("#btn_mostrarLista").addEventListener('click', traerLista);
document.querySelector("#btn_agregarAcarrito").addEventListener('click', agregarAcarrito);
document.querySelector("#btn_agregarIng").addEventListener('click', agregar);
document.querySelector("#btn_editarIng").addEventListener('click', editarIngrediente);
document.querySelector("#btn_borrarIng").addEventListener('click', borrarIngrediente);
document.querySelector("#btn_agregar3").addEventListener('click', agregarx3);
document.querySelector("#btn_borrarCarrito").addEventListener('click', borrarCarrito);

async function traerLista(){
    const url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes';
    let container= document.querySelector("#tbody1");
    container.innerHTML="";
    try{
    
        let res= await fetch(url+'?p=1&l=10');
        let json = await res.json();
        console.log(json);
        for (let ingrediente of json) {
            let nombre= ingrediente.ingrediente;
            let cantidad= ingrediente.cantidad;
            let precio= ingrediente.precio;
            let id = ingrediente.id
            container.innerHTML+='<td>'+nombre+'</td><td>'+cantidad+'</td><td>'+precio+'</td><td>'+id+'</td>';
    }
       btn=document.createElement("button", mostrarPagina2);
        btn.innerHTML+='Siguiente';
       document.td.appendChild(btn);
    }
    catch(error){
        console.log(error);
    }
}
async function agregarAcarrito(){
    let ingredienteAgregado= document.querySelector("#idIngrediente").value;
    let url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes/'+ingredienteAgregado;
    let container= document.querySelector("#tbody2");
    try{
        let res= await fetch(url);
        let json = await res.json();
        console.log(json);
        let nombre= json.ingrediente;
        let cantidad= json.cantidad;
        let precio= json.precio;
        let id= json.id;
        container.innerHTML+='<td>'+nombre+'</td> <td>'+cantidad+'</td> <td>'+precio+'</td> <td>'+id+'</td>';
    }
    catch(error){
        console.log(error);
    }
}
async function agregar(){
    let nombre= document.querySelector("#nombreIngNuevo").value;
    let cantidad= document.querySelector("#cantidadIngNuevo").value;
    let precio= document.querySelector("#precioIngrediente").value;
    let ingrediente={
        'ingrediente': nombre,
        'cantidad': cantidad,
        'precio':precio,
    }
    let url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes/';
    try{
        let res= await fetch(url,{
            'method': 'POST',
            'headers': {'Content-type': 'application/json'},
            'body': JSON.stringify(ingrediente),
        });
        let json= await res.json();
        console.log(json);
        traerLista();

        
    }
    catch(error){
        console.log(error);
    }

}
async function borrarIngrediente(){
    //let ingrediente=document.querySelector("#ingredienteaBorrar").value;
    //let cantidad=document.querySelector("#cantidadIngAborrar").value;
    //let precio=document.querySelector("#precioIngAborrar").value;
    let id= document.querySelector("#idIngAborrar").value;
    let url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes/'+id;
    try{
        let res= await fetch(url , {
        'method': 'DELETE',
    });
    }
    catch(error){
        console.log(error);
    }
    traerLista();
}
async function editarIngrediente(){
    let ingrediente=document.querySelector("#ingredienteaBorrar").value;
    let cantidad=document.querySelector("#cantidadIngAborrar").value;
    let precio=document.querySelector("#precioIngAborrar").value;
    let id= document.querySelector("#idIngAborrar").value;
    let itemEditado={
        'ingrediente': ingrediente,
        'cantidad': cantidad,
        'precio': precio,
        'id': id,
    }
    let url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes/'+id;
    try{
        let res= await fetch(url, {
        'method': 'PUT',
        'headers': {'Content-type':'application/json'},
        'body': JSON.stringify(itemEditado),
    });
    }
    catch(error){
        console.log(error);
    }
    traerLista();
}
async function agregarx3(){
    let ingredienteAgregado= document.querySelector("#idIngrediente").value;
    let url= 'https://62a3965121232ff9b2229dca.mockapi.io/api/v1/ingredientes/'+ingredienteAgregado;
    let container= document.querySelector("#tbody2");
    try{
        let res= await fetch(url);
        let json = await res.json();
        console.log(json);
        let nombre= json.ingrediente;
        let cantidad= json.cantidad;
        let precio= json.precio;
        let id= json.id;
        for(let i=0; i<3; i++){
            container.innerHTML+='<tr><td>'+nombre+'</td> <td>'+cantidad+'</td> <td>'+precio+'</td> <td>'+id+'</td></tr>';
        }
    
    }
    catch(error){
            console.log(error);
    }
    
}
function borrarCarrito(){
    let container= document.querySelector("#tbody2");
    container.innerHTML="";

}