import React from 'react';

// Importar imagenes
import img1 from '../../img/BL-Evento2022-Desktop-Form1.png';

const SectionFormulario = () => {
    return ( 
        <div className=" pb-14 " id="formulario-container-summit2022">
            <div>
                <img className=' h-full w-full ' loading="lazy" decoding="async" src={img1} lazyalt="imagen" />
            </div>
        </div>
     );
}
 
export default SectionFormulario;