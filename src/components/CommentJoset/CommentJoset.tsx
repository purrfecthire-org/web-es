import React from "react";
import Image from "next/image";

export default function CommentJoset() {
  return (
    <section className="m-0 lg:py-10">
      <div className="padding-container max-container flex flex-wrap items-center justify-center mt-10">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="poppins max-w-xl text-indigo-950 font-extrabold text-center lg:text-left mb-6">
            Lo que dicen los founders sobre Purrfect Hire
          </h1>
          <p className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            &quot;Las personas que hemos contratado a través de Purrfect Hire no solo siguieron trabajando, fueron promovidas a roles de mayor responsabilidad por lo bien que se adaptaron a nuestra cultura.&quot;
          </p>
          <h3 className="poppins max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md mt-4">
            Micaela Crosta, Head of Customer Operations, OutDo (US)
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
