"use client";
import React from "react";
import { redirect } from "../../utilities/utils";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="m-0 py-14 lg:py-20">
      <div className="padding-container max-container">
        <div className="text-center mb-10">
          <h1 className="poppins leading-none text-indigo-950 font-extrabold lg:leading-tight mb-6">
            Cuéntanos cómo trabaja tu equipo de verdad.
          </h1>
          <p className="poppins text-gray-500 max-w-2xl mx-auto">
            O cuéntanos a dónde quieres llegar. La primera conversación es rápida y honesta.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            type="button"
            className="text-white bg-indigo-950 font-bold text-lg rounded-xl pb-3 pt-3 pl-6 pr-6 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
            onClick={(event) =>
              redirect(event, "https://forms.gle/coJZM83rMV1GDYF79")
            }>
            Necesito contratar
          </button>
          <button
            type="button"
            className="text-indigo-950 border-2 border-indigo-950 font-bold text-lg rounded-xl pb-3 pt-3 pl-6 pr-6 text-center hover:bg-indigo-50 transition duration-300 ease-in-out"
            onClick={(event) =>
              redirect(event, "https://forms.gle/MhgHJ9D1PrbD2ksm7")
            }>
            Quiero ser contratado
          </button>
        </div>

        <div className="text-center">
          <p className="poppins text-sm" style={{ color: "#5C5C5C" }}>
            Candidatos:{" "}
            <a
              href="mailto:hiring@purrfecthire.com"
              className="text-indigo-950 font-medium hover:underline">
              hiring@purrfecthire.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
