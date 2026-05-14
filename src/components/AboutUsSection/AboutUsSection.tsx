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
            Sobre Purrfect Hire
          </h1>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            Somos una firma boutique de contratación construida específicamente para founders en portafolios de YC, a16z y Sequoia. Trabajamos los hires senior que deciden si una empresa escala o se estanca. Antes de abrir pipeline, nos tomamos el tiempo de calibrar contra la cultura real del founder, no el JD. Luego entrenamos al talento que colocamos contra esa señal exacta.
          </p>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            El resultado: 160+ colocaciones, 80% de retención a 24 meses, y un sistema de loop cerrado donde lo que aprendemos de los founders afina cómo entrenamos al talento, y lo que aprendemos del talento afina a quién colocamos.
          </p>
          <p className="poppins text-gray-500 text-center lg:text-right  mb-5">
            En un mercado que escala volumen sin calibración, operamos al revés: sourcear menos, calibrar más, consultar como pares.
          </p>
        </div>
      </div>
    </section>
  );
}
