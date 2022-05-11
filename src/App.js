import React from "react";
import ImagenImportada from "./components/ImagenImportada";
import ImagenEnPublic from "./components/ImagenEnPublic";
import ImagenConRequire from "./components/ImagenConRequire";
import './App.css'

function App() {
  return (
    <>
      <ImagenImportada />
      <ImagenEnPublic />
      <ImagenConRequire />
    </>
  );
}

export default App;
