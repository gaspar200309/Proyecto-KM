import React from 'react'

export const PieDePagina = () => {
    return (
        <>
            <div className="pie-pagina ">
                <div className="contenedor-piepagina contenedor">
                    <div className="info">
                        <h3>Dirección</h3>
                        <p>C. Luis Castell N° 1900. <br></br>Frente al parque Teleferico-CBBA</p>
                    </div>
                    <div className="info">
                        <h3>Días de atencion</h3>
                        <p>Lunes a Viernes</p>
                        <p>+591 60375040</p>
                    </div>
                    <div className="info">
                        <h3>Horarios de atencion</h3>
                        <p>08:30am - 18:30pm</p>
                        <div className ="redes-sociales redes-pie">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Noticias</h3>
                        <p>Envianos tus novedades</p>
                        <input type="email" placeholder="Envia un comentario" />
                        <input type="submit" className="btnF" value="ENVIAR" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="logo">
                    <h2>Por buen futuro</h2>
                </div>
                <p>Todos los derechos reservados <span className="fecha"></span>  &copy; Desarollo por gaspar123</p>
            </footer>
        </>
    )
}
