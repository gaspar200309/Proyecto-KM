import React, { forwardRef } from "react";

const Recomendaciones = forwardRef(({ recomendaciones, scrollRecomendaciones }, ref) => (
  <div className="recomendaciones-wrapper">
    <button className="scroll-button left" onClick={() => scrollRecomendaciones("left")}>
      {"<"}
    </button>
    <div className="recomendaciones-container" ref={ref}>
      {recomendaciones.map((carrera) => (
        <Card
          key={carrera._id}
          imgSrc={carrera.imgSrc}
          titulo={carrera.titulo}
          descripcion={carrera.descripcion}
          id={carrera._id}
        />
      ))}
    </div>
    <button className="scroll-button right" onClick={() => scrollRecomendaciones("right")}>
      {">"}
    </button>
  </div>
));

export default Recomendaciones;
