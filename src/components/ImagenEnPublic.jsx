import React from "react";

/* 
si tienen las imagenes en public seria simplemente pasarle la ruta de la imagen a su objeto.
notese que no lleva el public adelante sino la / solamente (sin punto).
*/
const misDatos = [
  { name: "Imagen Adoptar", image: '/assets_en_public/adoptar.png', text: "Adopta una mascota (public)" },
  { name: "Imagen de un Pez", image: '/assets_en_public/pez.png', text: "Pez en su pecera (public)" },
];

const ImagenEnPublic = () => {
  return (
    <>
    <h1>IMAGEN EN PUBLIC</h1>
    <div className="cards_container">
      {misDatos.map((dato) => (
      <div className="card">
        <img src={dato.image} alt={dato.name} />
        <p>{dato.text}</p>
      </div>
      ))}
    </div>
    </>
  );
};

export default ImagenEnPublic;
