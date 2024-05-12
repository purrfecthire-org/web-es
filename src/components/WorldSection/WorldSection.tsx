import React from "react";
import Image from "next/image";

export default function WorldSection() {
  return (
    <section className="m-0 lg:py-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="poppins max-w-xl text-indigo-950 font-extrabold text-center lg:text-left lg:leading-tight mb-[29px]">
            ¡Universales desde el primer dia!
          </h1>
          <p className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
          Nuestros clientes están en más de 12 países en toda América Latina, Estados Unidos y Europa.







          </p>
          <p className="poppins mt-4 max-w-xl font-semibold text-center text-gray-500 lg:text-left lg:max-w-md">
          México, Colombia, Chile, Emiratos Árabes Unidos, Croacia, Alemania, Suecia, Estados Unidos, Brasil, Argentina y Reino Unido
          </p>
        </div>
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <div className="ml-auto">
            <Image
              className="w-[100%] h-auto rounded-xl"
              src="/world.png"
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
