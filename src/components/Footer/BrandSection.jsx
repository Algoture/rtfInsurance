import { Facebook, Instagram, Linkedin } from "lucide-react";

const BrandSection = () => (
  <div>
    <div className="flex items-center mb-4">
      <img src="/Logo.png" alt="RTF Logo" className="h-10 w-auto" />
    </div>
    
    <div className="flex space-x-4">
      <Instagram className="text-black cursor-pointer" />
      <Facebook className="text-black cursor-pointer" />
      <Linkedin className="text-black cursor-pointer" />
    </div>
  </div>
);

export default BrandSection;
