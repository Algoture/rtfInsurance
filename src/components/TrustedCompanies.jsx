export default function TrustedCompanies() {
  const companyLogos = [
    "/companies/company1.png",
    "/companies/company2.png",
    "/companies/company3.png",
    "/companies/company4.png",
    "/companies/company5.png",
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">
          Trusted by Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5 opacity-80">
          {companyLogos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Company logo ${index + 1}`}
              className="h-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
