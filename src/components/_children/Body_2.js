import React, { useState, useEffect } from "react";

// Importar imagenes
import img1 from "../../img/BL-Evento2022-Desktop-ROSE-LOGO1.png";
import img2 from "../../img/BL-Evento2022-Desktop-ROSE1.png";
import img3 from "../../img/BL-Evento2022-Mobile-ROSE1.png";
import img4 from "../../img/Frame.png";

const SectionLocal = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div className=" bg-white pb-14 pt-14 ">
      <h2 className=" text-center text-5xl font-bold md:pb-10 md:text-5xl lg:text-6xl ">
        Local
      </h2>
      <div className=" flex flex-col pt-3 md:grid grid-cols-2 md:grid-rows-2 local-grid-md ">
        <div className=" w-full self-center pt-5 pb-5 md:col-start-2 col-end-3 md:row-start-1 row-end-2 md:self-end md:p-0 md:pl-6 md:pb-2 ">
          <img
          className=" w-auto h-auto m-auto md:w-3/6 md:m-0 "
          loading="lazy"
          decoding="async"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/P3FIA24Y4ZD25GHUZWSDU3DYMM.png"
          lazyalt="imagen"
          />
        </div>
        <div className=" w-full self-center pt-5 pb-5 md:col-start-1 col-end-2 md:row-start-1 row-end-3 md:p-0 ">
          {width <= 767
            ?
              <img className=" h-full w-full " loading="lazy" decoding="async" src={img3} lazyalt="imagen" />
            :
            <img
            className=" h-full w-full "
            loading="lazy"
            decoding="async"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/WFQI57FMTVENLIDES7BGDY4HVY.png"
            lazyalt="imagen"
            />
          }
        </div>
        <div className=" self-center pt-5 md:col-start-2 col-end-3 md:row-start-2 row-end-3 md:self-start md:pt-0 md:pl-6">
          <div className=" flex flex-row md:pt-2">
            <img
              /* className=" w-7 h-11 " */
              className=" w-7 h-11 animate-bounce"
              /* className=" w-7 h-11 hover:cursor-pointer hover:scale-125 transition ease-out duration-500 " */
              loading="lazy"
              decoding="async"
              src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/DEBTMUIVL5HVTHRDPNKLXF6NKU.png"
              lazyalt="imagen icono"
            />
            <h3 className="flex flex-col pl-2 text-xl ">
              Rua Itapeva, 435 - Bela Vista -<span>São Paulo/SP 01332-00</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLocal;
