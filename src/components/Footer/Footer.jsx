import {
  businessProducts,
  coreProducts,
  learnMoreLinks,
} from "../../utilities/footerData";
import BrandSection from "./BrandSection";
import FooterLinkSection from "./FooterLinkSection";
import FooterSection from "./FooterSection";
import LegalSection from "./LegalSection";

export default function Footer() {
  return (
    <footer className="bg-[#D5DCFF] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-10">
          <BrandSection />
          <FooterLinkSection title="Learn More" links={learnMoreLinks} />
          <FooterSection title="RTF Core Products" links={coreProducts} />
          <FooterSection title="RTF Business" links={businessProducts} />
        </div>
        <LegalSection />
      </div>
    </footer>
  );
}
