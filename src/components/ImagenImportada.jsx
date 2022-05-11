import React from "react";

/* 
importamos las imagenes en donde las vayamos a usar. aca las puse en ImagenImportada porque aca tengo el array con los objetos, 
pero en su caso si tienen el array en otro archivo hacen el import de las imagenes ahi
*/
/* le ponen el nombre que quieran al import - si es mas o menos descriptivo mejor (img1 quizas no es tan descriptivo)*/
import adoptar from "../assets/adoptar.png";
import gato from "../assets/gato.png";

/* en el array le pasan a cada objeto la imagen. no tienen que poner eso que importaron entre llaves porque no estan escapando al JSX en esta parte */
const misDatos = [
  { name: "Imagen Adoptar", image: adoptar, text: "Adopta una mascota" },
  { name: "Imagen de un Gato", image: gato, text: "Gato feliz" },
];

const ImagenImportada = () => {
  return (
    <>
      <h1>IMAGEN IMPORTADA</h1>
      <div className="cards_container">
        {misDatos.map((dato) => (
          <div className="card">
            {/* le pasan aca al src de img el campo y listo! */}
            <img src={dato.image} alt={dato.name} />
            <p>{dato.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagenImportada;
