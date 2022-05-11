import React from "react";

/* 
esta es otra forma para hacer imports dinamicos. a sus objetos en el array le pasan el nombre del archivo nada mas.
*/
const misDatos = [
  { name: "Imagen Adoptar", image: 'adoptar.png', text: "Adopta una mascota (require)" },
  { name: "Imagen de un Pato", image: 'que-tenga-un-lindo-dia.png', text: "Pato caminando con cartel (require)" },
];

const ImagenConRequire = () => {
  return (
    <>
    <h1>IMAGEN CON REQUIRE</h1>
    <div className="cards_container">
      {misDatos.map((dato) => (
      <div className="card">

        {/* y en el src de img le pasan el require (que lo importaria), concatenando la ruta relativa de donde esta la imagen (la carpeta en src),4
        con el nombre del archivo que tenian en el objeto
        */}
        <img src={require(`../assets/${dato.image}`)} alt={dato.name} />
        <p>{dato.text}</p>
      </div>
      ))}
    </div>
    </>
  );
};

export default ImagenConRequire;
