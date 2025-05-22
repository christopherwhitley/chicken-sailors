import { fetchTestimonials } from "../services/api"
import TestimonialCard from "./TestimonialCard"
import { useEffect, useState } from "react";
import { fetchWithRetry } from "../utils/FetchWithRetry";

const TestimonialsSlice = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchWithRetry(() => fetchTestimonials())
      .then(setTestimonials)
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
      });
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our feathered customers have to say.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlice

