import React from "react";
import becasData from "./BecasApp";
import "./Becas.css";
import ScrollToTop from "../../components/Scrooll";




const Becas = () => {
  
  return (
    <>
    <ScrollToTop></ScrollToTop>
      <h1 className="becas">Becas</h1>
      {becasData.map((beca) => (
        <div className="cardB" key={beca.id}>
          <div className="img-cardB">
            <img src={beca.imgSrc} alt="" height="250px" width="300px" />
          </div>
          <div className="contentB">
            <div className="titleB">
              <h3>{beca.universidad}</h3>
              <span>{beca.dato}</span>
            </div>
            <div className="textB">
              <p>{beca.descripcion}</p>
            </div>
            {/* <div className="btn-containerB">
              <button>Visitar</button>
            </div> */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Becas;
