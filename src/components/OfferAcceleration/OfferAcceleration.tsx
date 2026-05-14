"use client";
import React from "react";
import { redirect } from "../../utilities/utils";

export default function OfferAcceleration() {
  return (
    <section id="offer-acceleration" className="m-0 py-14 lg:py-20">
      <div className="padding-container max-container">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="poppins uppercase tracking-widest text-sm font-medium mb-4"
            style={{ color: "#A3A3A3" }}
          >
            Para Talento · Programa de Coaching
          </p>
          <h1 className="poppins leading-none text-indigo-950 font-extrabold lg:leading-tight mb-6">
            Senior en skills. Atascado en ofertas.
          </h1>
          <p className="poppins text-gray-500 max-w-3xl mx-auto">
            Offer Acceleration es un programa de 8 sesiones para profesionales senior de LATAM que ya tienen las skills, pero necesitan la estrategia, la red y el criterio para conseguir una oferta en una startup de US que valga la pena.
          </p>
        </div>

        {/* Blocks */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">

          {/* Block 1 */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              Eres el fit correcto si:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Tienes 5+ años de experiencia y resultados consistentes</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Has aplicado a roles en US y te filtran o te ofrecen menos de tu nivel</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Sabes que la vara técnica no es tu problema, llegar frente a los founders correctos sí lo es</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Estás listo para construir estrategia de carrera, no solo enviar más aplicaciones</span>
              </li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              En 8 sesiones:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">01</span>
                <span>Coaching 1:1 con recruiters senior que colocan en portafolios de YC y a16z</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">02</span>
                <span>Señal real de búsquedas activas: cómo evalúan los founders de US de verdad</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">03</span>
                <span>Posicionamiento, narrativa y calibración de entrevistas contra varas reales de startups</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 font-bold shrink-0">04</span>
                <span>Intros directas cuando hay fit, no referrals genéricos</span>
              </li>
            </ul>
          </div>

          {/* Block 3 */}
          <div className="flex-1 min-w-[280px] max-w-[400px] border-t-2 border-indigo-950 pt-8">
            <h3 className="poppins font-bold text-xl mb-6 text-indigo-950">
              Al final:
            </h3>
            <ul className="poppins flex flex-col gap-4">
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Dejas de aplicar. Empiezan a presentarte.</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Dejas de vender skills. Empiezas a llegar a la mesa correcta.</span>
              </li>
              <li className="flex gap-3 items-start text-gray-500">
                <span className="text-indigo-950 mt-1 shrink-0">→</span>
                <span>Dejas de quedar filtrado. Empiezas a entrar donde querías estar.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing */}
        <div className="text-center mb-10">
          <p
            className="poppins font-medium max-w-2xl mx-auto"
            style={{ color: "#0F0F0F" }}
          >
            Construido por recruiters que han colocado 160+ hires senior en portafolios de YC y a16z. Sabemos exactamente dónde está la vara. Ahora la compartimos contigo.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            className="text-white bg-indigo-950 font-bold text-lg rounded-xl pb-3 pt-3 pl-6 pr-6 text-center hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
            onClick={(event) =>
              redirect(
                event,
                "https://tally.so/r/RG02Gl",
              )
            }
          >
            Aplica a Offer Acceleration →
          </button>
          <p className="poppins text-sm" style={{ color: "#5C5C5C" }}>
            Cohortes limitadas. Aplicación requerida.
          </p>
        </div>

      </div>
    </section>
  );
}
