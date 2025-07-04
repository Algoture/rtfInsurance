import { Heart, Car, ShieldCheck, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#0147A3] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Your Trusted <br />
            <span className="text-btn">Insurance</span> <br />
            <span className="text-btn">Partner</span>
          </h1>
          <p className="text-lg mb-8 text-blue-100 max-w-md">
            Making insurance accessible, valuable. Your protection is our{" "}
            <span className="text-btn font-medium">lifetime commitment.</span>
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow ">
              Explore products →
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow ">
              Learn more →
            </button>
          </div>
        </div>

        <div className="relative grid grid-cols-3 gap-2">
          <div className="cen flex-col gap-4">
            <div className="bg-[#D9D9D93D] border-ax border-[1.5px] cen gap-1 p-2 rounded-md">
              <Heart className="text-ax " />
              Health Insurance
            </div>
            <img
              src="/insurances/Insurance9.png"
              alt="Health Insurance"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="cen flex-col gap-4">
            <img
              src="/insurances/Insurance10.png"
              alt=" Motor Insurance"
              className="rounded-lg object-cover"
            />
            <div className="bg-[#D9D9D93D] border-ax border-[1.5px] cen gap-1 p-2 rounded-md">
              <ShieldCheck className="text-sec " />
              Motor Insurance
            </div>
          </div>
          <div className="cen flex-col gap-4">
            <div className="bg-[#D9D9D93D] border-ax border-[1.5px] cen gap-1 p-2 rounded-md">
              <Heart className="text-ax " />
              Home Insurance
            </div>
            <img
              src="/insurances/Insurance8.png"
              alt="Home Insurance"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex items-center space-x-2 bg-white shadow-md px-4 py-1 rounded-full text-sm text-black font-medium">
      <Icon className="w-xl h-" />
      <span>{label}</span>
    </div>
  );
}
