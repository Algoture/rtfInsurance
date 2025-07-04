import { Mail, MapPin, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="bg-[#1A307A] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Protected?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Take the first step towards securing your future. Get a personalized
          insurance quote in just minutes and discover how affordable protection
          can be for you.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3">
            Get Free Quote
          </button>
          <button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 bg-transparent">
            Schedule Consultation
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-blue-100">+1 (555) 123-4567</p>
            <p className="text-blue-100 text-sm">Available 24/7</p>
          </div>

          <div>
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-blue-100">info@rtfinsurance.com</p>
            <p className="text-blue-100 text-sm">We respond within 24 hours</p>
          </div>

          <div>
            <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-blue-100">123 Insurance Ave, AJMT</p>
            <p className="text-blue-100 text-sm">Mon-Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
