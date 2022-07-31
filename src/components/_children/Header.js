import React, { useState, useEffect } from "react";

// Importar imagenes
import img1 from "../../img/BL-Evento2022-Desktop-11.png";
import img2 from "../../img/BL-Evento2022-Mobile-11.png";

const SectionSubmit = () => {
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


  const [counter, setCounter] = useState(0);
  //increase counter
  const addCounter = () => {
      setCounter(counter + 1);
  };
  //reset counter 
  const resetCounter = () =>{
      setCounter(0)
  }
  const counter2 = () => {
      const counterMax = 200;
      if (counter < counterMax) {
          addCounter();
      } else {
          resetCounter();
      }        
  }
    
  setTimeout(counter2, 5000);

  return (
    <div className=" pt-14 pb-14 font-lato ">
      <div className=" w-full ">
        {width <= 767
        ?
          <img className=" h-full w-full " loading="lazy" decoding="async" src={img2} lazyalt="imagen" />
        :
        <img
          className=" h-full w-full "
          loading="lazy"
          decoding="async"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/D275ZYHF2FD5JINNHYPXQ2EJF4.png"
          lazyalt="imagen"
        />
        }
      </div>
      <div className=" w-full px-12 pt-10 text-center text-xl leading-6 md:text-2xl lg:text-3xl ">
        <p className=" pb-5 ">
          A Bloomberg Línea traz ao Brasil o seu evento inaugural, com um café
          da manhã no hotel Rosewood, unindo o melhor da Bloomberg e as figuras
          mais influentes do ramo para discussões impactantes sobre negócios,
          finanças e inovação.
        </p>
        <p className=" pb-5 ">
          O encontro presencial, com data marcada para setembro, será exclusivo
          para pessoas inscritas e irá abordar temas relevantes para a
          indústria, explorando mais a fundo as tendências que prometem mover os
          mercados e como grandes empresas estão inovando em meio a mudanças
          constantes, trazendo a América Latina para os holofotes.
        </p>
        <p>
          Com diversos especialistas, o objetivo do evento é ser um palco para
          diferentes perspectivas e insights marcantes sobre como inovar no
          mundo corporativo, no Brasil e no mundo.
        </p>
      </div>
      <div className=" px-12 pt-10 flex flex-col md:flex-row md:justify-between ">
        <div className=" flex flex-col pb-5 ">
          <h3 className=" text-7xl font-bold pb-4 border-b-2 border-b-black md:text-7xl lg:text-8xl lg:w-64">
            +{counter}
          </h3>
          <p className=" text-xl pt-1 md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
            participantes
          </p>
        </div>
        <div className=" flex flex-col pb-5 ">
          <h3 className=" text-7xl font-bold pb-4 border-b-2 border-b-black md:text-7xl lg:text-8xl lg:w-80">
            100%
          </h3>
          <p className="text-xl pt-1 md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">
            audiência de alto nível/C-level
          </p>
        </div>
        <div className=" flex-col ">
          <h3 className=" text-7xl font-bold pb-4 border-b-2 border-b-black md:text-7xl lg:text-8xl lg:w-64 ">
            3h
          </h3>
          <p className="text-xl pt-1 md:text-xl lg:text-2xl ">
            de conteúdo exclusivo
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSubmit;
