import Button from "./ui/Button";
const features = [
  {
    title: "Hr Dashboard",
    img: "/glimpses/img1.png",
  },
  {
    title: "Claim List",
    img: "/glimpses/img2.png",
  },
  {
    title: "Policy List",
    img: "/glimpses/img4.png",
  },
  {
    title: "Monthly Reporting",
    img: "/glimpses/img3.png",
  },
];

export default function Glimpses() {
  return (
    <section className="py-20 px-4 bg-[#FFE7E7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-sec mb-7">Glimpses of our -</h2>

        <div className="flex gap-1 mb-8">
          <Button title="E-Portal" />
          <Button title="Employee App" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8">
            <img
              src="/dashboard.png"
              alt="Dashboard Preview"
              width={600}
              height={400}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function FeatureCard({ title, img }) {
  return (
    <div className="space-x-4 flex flex-col items-center">
      <div className="flex items-center flex-col rounded-xl border-[1.2px]  border-gray-400 hover:border-ax  p-2">
        <img src={img} alt={title} />
        <h3 className="font-bold text-black">{title}</h3>
      </div>
    </div>
  );
}
