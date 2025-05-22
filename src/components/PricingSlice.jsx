import { fetchPricingPlans } from "../services/api"
import PricingCard from "./PricingCard"
import { useEffect, useState } from "react";
import { Button } from "./ui/button"
import { fetchWithRetry } from "../utils/FetchWithRetry";

const PricingSlice = () => {
    const [pricingPlans, setPricingPlans] = useState([]);
  
    useEffect(() => {
      fetchWithRetry(() => fetchPricingPlans())
        .then(setPricingPlans)
        .catch((err) => {
          console.error("Failed to fetch pricing plans:", err);
        });
    }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing Plans</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect sailing dinghy for your chicken&apos;s nautical needs and egg transport requirements.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="h-full">
              <PricingCard plan={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSlice

