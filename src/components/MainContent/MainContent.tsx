"use client";
import React from "react";
import Image from "next/image";

import { redirect } from "../../utilities/utils";

export default function MainContent() {
  return (
    <section id="main-content" className="pb-5 pt-[100px] m-0 pt-0">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="poppins max-w-xl leading-none text-indigo-950 font-extrabold text-center lg:text-left lg:leading-tight mb-6">
          Contratación orientada en la cultura y resultados de alto impacto
          </h1>
          <p className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
          Nuestra plataforma está transformando el proceso de contratación, enfatizando en la compatibilidad cultural y las conexiones humanas significativas.
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            <button
              type="button"
              className="text-white bg-indigo-950 font-bold text-lg rounded-xl pb-3 pt-3 pl-6 pr-6 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
              onClick={(event) =>
                redirect(
                  event,
                  "https://calendly.com/daniel-aguirred/purrfect-hire-eng?month=2024-03"
                )
              }>
              Contacto
            </button>
          </div>
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="ml-auto">
            <Image
              width={800}
              height={8}
              className="w-[100%] h-auto rounded-xl"
              src="/main-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
