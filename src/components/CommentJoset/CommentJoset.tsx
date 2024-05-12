import React from "react";
import Image from "next/image";

export default function CommentJoset() {
  return (
    <section className="m-0 lg:py-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="poppins max-w-xl text-indigo-950 font-extrabold text-center lg:text-left mb-6">
          ¿Cómo se siente trabajar en <span className="whitespace-nowrap">Purrfect Hire? </span>
          </h1>
          <p className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
          &quot;Como miembro del equipo fundador de Purrfect Hire, 
          mi entusiasmo surge de contribuir al desarrollo 
          de un equipo multicultural, donde cada día se 
          presentan oportunidades para el crecimiento 
          personal y el aprendizaje. El ambiente 
          estimulante no solo atrae a una amplia 
          gama de individuos, sino que también 
          nutre mi naturaleza 
          &nbsp;dinámica&nbsp;curiosa.&quot;
          <br/> 
          <br/> 
   
        </p>
        <h3 className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
        Jose B. Gómez, 
          Product Manager.
        </h3>

        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="ml-auto flex justify-center lg:justify-end">
            <Image
              className="w-[100%] h-auto rounded-xl"
              src="/people.png"
              width={800}
              height={8}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
