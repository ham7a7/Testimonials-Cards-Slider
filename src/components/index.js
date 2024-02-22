import React, { useRef } from "react";
import Card from "./Card";
import Header from "./Header";
import { CardsSlider } from "./CardsSlider";

function TestimonialsSlider({ TestimonialsData }) {
  // Refrencing the parent element of the cards
  let scrolledItem = useRef(null);

  return (
    <section
      className={`pt-10 md:pt-20 w-full h-screen overflow-hidden relative bg-bg-1`}
      id="Testimonials"
    >
      {/* Header */}
      <Header />

      {/* Cards Slider  */}
      <CardsSlider scrolledItem={scrolledItem} />

      <div
        className="flex items-center py-6 pb-20 overflow-x-auto  md:overflow-x-hidden first:ml-0 snap-x snap-mandatory md:snap-none scroll-smooth testimonial  z-10"
        ref={scrolledItem}
      >
        {TestimonialsData.map((a) => (
          <Card
            key={a.id}
            name={a.name}
            testimonial={a.testimonial}
            company={a.company}
            photo={a.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSlider;
