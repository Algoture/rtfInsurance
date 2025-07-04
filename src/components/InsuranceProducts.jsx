import { ArrowRight, Shield } from "lucide-react";
import { insuranceProducts } from "../utilities/insuranceProducts";

export default function InsuranceProducts() {
  return (
    <section className="py-20 px-4 bg-[#E3E8F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 border border-gray-500 bg-[#0B33B814] px-4 py-2 rounded-full mb-4">
            <Shield className="w-5 h-5 text-sec" />
            <span className="text-sec font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Insurance Products
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Comprehensive insurance solutions tailored to your individual and
            business needs with industry-leading coverage and competitive rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insuranceProducts.map((product, index) => (
            <InsuranceCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InsuranceCard({ title, description, image, alt }) {
  return (
    <div className="shadow-xl bg-white rounded-2xl overflow-hidden">
      <div className="relative overflow-hidden">
        <img src={image} alt={alt} className="w-full  object-fill" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <button className="rounded-xl cen border-ax gap-1 font-semibold border-[1.5px] text-black px-3 py-2">
          Learn more{" "}
          <span>
            <ArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
