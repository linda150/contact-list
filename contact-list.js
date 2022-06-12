//lista de contactos

let contactList = [
  "Luna Lunera",
  "Maicol Giovany",
  "Sol Solecito",
  "Marte Zat",
];

//Función para añadir nuevos contactos

let newContact = prompt("Agrega un nuevo contacto");

if (newContact == null || newContact == "") {
  alert("Este nombre no es valido");
} else {
  addContact = contactList.push(newContact);
}

//Funcion para eliminar contacto

alert("Esta es tu lista de contactos" + contactList);

let deleteContact = prompt("Elimina un contacto");

if (deleteContact == null || deleteContact == "") {
  alert("Este nombre no es valido");
} else {
  if (contactList.filter((i) => i === deleteContact).length) {
    const finalList = contactList.filter((i) => i !== deleteContact);
    console.log(finalList);
  } else {
    alert("Este nombre no esta en la lista");
    console.log(contactList);
  }
}
