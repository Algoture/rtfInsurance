import { legalLinks } from "../../utilities/footerData";

const LegalSection = () => (
  <div className="border-t border-[#AFADADBF] pt-5  flex justify-between md:flex-row  gap-4">
    <p className="text-sm text-[#151515] text-center md:text-left">
      © 2024 RTF Insurance Brokers Pvt Ltd. All rights reserved.
    </p>
    <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-300">
      {legalLinks.map((link, index) => (
        <a key={index} href={link.href} className="text-black">
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default LegalSection;
