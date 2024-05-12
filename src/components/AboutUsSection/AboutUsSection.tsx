import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about-section" className="lg:py-5 m-0 pt-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="flex lg:justify-start justify-center">
            <Image
              className="w-[80%] h-auto rounded-xl"
              src="/aboutImage.jpg"
              width={800}
              height={8}
              alt=""
            />
          </div>
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2 flex flex-col">
          <h1 className="poppins text-indigo-950 font-extrabold text-center lg:text-right  mb-6">
            Nosotros
          </h1>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">

          Nuestro equipo se compone de individuos apasionados y comprometidos que persiguen continuamente la excelencia. Valoramos profundamente la sinergia entre candidatos y empresas, fomentando contrataciones sólidas y la retención de talento.           </p>
        </div>
      </div>
    </section>
  );
}
