import React from "react";

const Card = ({ name, testimonial, company, photo }) => {
  return (
    <div className={`w-[100%] flex justify-center shrink-0`}>
      <div className="w-[25rem] h-[25rem] flex flex-col justify-between bg-white p-4 shadow-sm relative mx-5 rounded-[15px] transition-all overscroll-contain snap-center">
        <Qoute code={0x060c} />

        <div className="flex shrink justify-center items-center text-left  text-base font-light text-text-1 h-full w-full ">
          {testimonial}
        </div>

        <Qoute code={44} align="text-right" />

        <div className="flex flex-row items-center basis-[20%] mt-5">
          <img
            src={photo}
            alt="testimonial"
            className="w-12 h-12 rounded-full object-cover mr-5  border-[1px] border-primary-2 border-solid"
          />
          <div className="flex flex-col">
            <div className="text-base text-text-1 text-left font-light">
              {name}
            </div>

            <div className="text-sm text-left text-text-2 font-light ">
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const Qoute = ({ code, align = "text-left" }) => {
  return (
    <div className={`w-full ${align} `}>
      <span className="text-primary-1 text-4xl">
        {String.fromCharCode(code)}
      </span>
      <span className="text-primary-1 text-4xl">
        {String.fromCharCode(code)}
      </span>
    </div>
  );
};
