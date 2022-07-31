import React from "react";

const SectionSpeaker = () => {
  return (
    <div className=" bg-black pb-14 pt-14 font-lato">
      <div className=" text-white px-12 ">
        <h2 className=" text-4xl font-bold flex flex-col leading-9 border-b-4 border-b-white pb-3 md:w-3/4 md:text-4xl lg:text-6xl">
          Speakers{" "}
          <span className=" text-3xl text-primary-500 font-normal md:text-4xl lg:text-6xl ">
            {" "}
            do mundo todo{" "}
          </span>
          <span className=" text-3xl text-primary-500 font-normal md:text-4xl lg:text-6xl ">
            anunciados em breve{" "}
          </span>
        </h2>
        <h2 className=" text-4xl font-bold text-right pt-4 leading-8 border-b-4 border-b-gray pb-3 md:w-3/5 md:text-right md:ml-auto lg:text-6xl ">
          <span className=" text-2xl text-primary-500 font-normal flex flex-col pt-5 md:text-3xl md:leading-10 lg:pt-16 xl:text-4xl ">
            Cronograma
          </span>{" "}
          14 de setembro
        </h2>
        <div className=" flex flex-col ">
          <div className=" flex flex-row justify-between pt-5 ">
            <h2 className=" flex flex-col text-2xl font-normal md:flex-row lg:text-4xl xl:text-5xl">
              Welcome Message{" "}
              <span className=" text-sm text-primary-500 md:self-end md:px-3 md:min-w-min md:text-lg lg:pl-4 lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                Com Mike Bloomberg
              </span>
            </h2>
            <h3 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl">
              8h45
            </h3>
          </div>
          <div className=" flex flex-row justify-between pt-5 ">
            <h2 className="flex flex-col text-2xl font-normal md:flex-row lg:text-4xl xl:text-5xl">
              Painel I{" "}
              <span className=" text-sm text-primary-500 md:self-end md:px-2 md:min-w-min md:text-lg lg:pl-4 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                Investimentos no Brasil e na América Latina nos próximos 5 anos
              </span>
            </h2>
            <h3 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl">
              9h00
            </h3>
          </div>
          <div className=" flex flex-row justify-between pt-5 ">
            <h2 className=" flex flex-col text-2xl font-normal md:flex-row lg:text-4xl xl:text-5xl">
              Painel II{" "}
              <span className=" text-sm text-primary-500 md:self-end md:px-3 md:min-w-min md:text-lg lg:pl-4 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                ESG: As oportunidade e investimentos sustentatavies
              </span>
            </h2>
            <h3 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl">
              10h00
            </h3>
          </div>
          <div className=" flex flex-row justify-between pt-5 ">
            <h2 className="flex flex-col text-2xl font-normal md:flex-row lg:text-4xl xl:text-5xl">
              Painel III{" "}
              <span className=" text-sm text-primary-500 md:self-end md:px-3 md:min-w-min md:text-lg lg:pl-4 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                Nova era para startups e VCs na América Latina
              </span>
            </h2>
            <h3 className="text-3xl md:text-2xl lg:text-4xl xl:text-5xl">
              11h00
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSpeaker;
