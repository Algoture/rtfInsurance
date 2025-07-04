import { Award, CheckCircle, Shield, ShieldCheck, Users } from "lucide-react";

export default function WhyChooseRTF() {
  return (
    <section className="py-16 px-4 bg-[#F0F1F4]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div className="bg-white relative ml-10 p-6 sm:p-8 lg:p-10 rounded-2xl w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-sec mb-6 sm:mb-8">
            Why Choose RTF Insurance?
          </h2>
          <img src="/Arrow.png" alt="arrow" className="absolute -top-40 md:block hidden w-full z-10 -right-80" />
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <BenefitItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-1/2">
          <div className="bg-gradient-to-br shadow-md from-[#E8EBF0] to-[#F4F8EB] rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0"></div>
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-24 h-24 sm:w-32 sm:h-32 text-sec" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-sec mb-2">
                Your Protection, Our Promise
              </h3>
              <p className="text-sec text-sm sm:text-base">
                Dedicated to safeguarding what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon: Icon, title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-orange-500 p-2 rounded-lg shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-sec">{title}</h3>
        <p className="font-light text-black text-sm sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: Award,
    title: "Expert Guidance",
    description:
      "Our team of insurance experts provide personalized advice tailored to your unique needs.",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support when you need it most. Anytime, anywhere, we're here.",
  },
  {
    icon: CheckCircle,
    title: "Trusted Partners",
    description:
      "We work with leading insurance companies to ensure your coverage meets the highest standards.",
  },
  {
    icon: Shield,
    title: "Simplified Process",
    description:
      "Easy online claims and streamlined processes to save time and reduce hassle.",
  },
];
