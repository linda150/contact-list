//lista de contactos

let contactList = [
  {
    id: 1,
    nombre: "Luna",
    apellido: "Lunera",
    telefono: 3245639865,
    ubicacion: [
      {
        ciudad: "Bogota",
        direccion: "cll 9 # 2-6",
      },
    ],
  },
  {
    id: 2,
    nombre: "Maicol",
    apellido: "Giovany",
    telefono: 2456348172,
    ubicacion: [
      {
        ciudad: "Bogota",
        direccion: "cll 106 # 3-4",
      },
    ],
  },
  {
    id: 3,
    nombre: "Marte",
    apellido: "Zat",
    telefono: 8735649182,
    ubicacion: [
      {
        ciudad: "Bucaramanga",
        direccion: "cll 70a # 9-18",
      },
    ],
  },
  {
    id: 4,
    nombre: "Sol",
    apellido: "Solecito",
    telefono: 3452674891,
    ubicacion: [
      {
        ciudad: "Barranquilla",
        direccion: "cll 10 # 34-9",
      },
    ],
  },
];

//Generar id

let lastItem = contactList[contactList.length - 1];
let newId = lastItem.id;

newId++;

//Función para añadir nuevos contactos

let newContact = {
  id: newId,
  nombre: prompt("Agrega un nuevo nombre"),
  apellido: prompt("Agrega un nuevo apellido"),
  telefono: parseInt(prompt("Agrega un nuevo telefono")),
  ubicacion: [
    {
      ciudad: prompt("Agrega un nueva ciudad"),
      direccion: prompt("Agrega un nuevo direccion"),
    },
  ],
};

const addContact = contactList.push(newContact);

//Funcion para eliminar contacto

let deleteName = prompt("Escribe el nombre del contacto a eliminar");
let deleteLastName = prompt("Escribe el apellido del contacto a eliminar");

if (
  contactList.filter(
    (i) => i.nombre === deleteName && i.apellido === deleteLastName
  ).length
) {
  const finalList = contactList.filter(
    (i) => i.nombre !== deleteName && i.apellido !== deleteLastName
  );
  console.log(finalList);
  alert("Contacto eliminado");
} else {
  alert("Este nombre no esta en la lista");
  console.log(contactList);
}

contactList.sort(function (a, b) {
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  return 0;
});

console.log(contactList);
