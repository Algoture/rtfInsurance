import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      <TopBar />

      <div className="bg-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/Logo.png" alt="logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-ax transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-ax transition-colors">
              Product
            </a>
            <a href="#" className="hover:text-ax transition-colors">
              Elements
            </a>
            <a href="#" className="hover:text-ax transition-colors">
              Blog
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[#1A307A] border px-6 py-2 rounded-md border-sec bg-white hover:bg-gray-100">
              Login
            </button>
            <button className="px-6 py-2 bg-[#051753] text-white rounded-md hover:bg-[#061a66]">
              Get a Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 text-sm font-medium text-gray-800 px-2">
            <a href="#" className="block hover:text-ax">
              Home
            </a>
            <a href="#" className="block hover:text-ax">
              Product
            </a>
            <a href="#" className="block hover:text-ax">
              Elements
            </a>
            <a href="#" className="block hover:text-ax">
              Blog
            </a>
            <div className="pt-2 border-t space-y-2">
              <button className="w-full text-[#1A307A] border px-4 py-2 rounded-md border-sec bg-white hover:bg-gray-100">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-[#051753] text-white rounded-md hover:bg-[#061a66]">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
function TopBar() {
  return (
    <div className="bg-[#1A307A] py-2 px-4 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-y-2">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-ax" />
            <span>+(111) 99_283_473</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-ax" />
            <span>rtfinsurance@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-ax" />
            <span>New York City, US</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Instagram className="hover:text-ax cursor-pointer" />
          <Facebook className="hover:text-ax cursor-pointer" />
          <Twitter className="hover:text-ax cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
