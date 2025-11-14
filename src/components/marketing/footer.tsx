import Link from "next/link";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { FOOTER_LINKS } from "@/constants/footerData";

function Footer() {
  //bg-[#0A2E2E]
  return (
    <footer className="bg-gradient-to-br from-[#0A2E2E] via-[#0D3D3D] to-[#1A4A3A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-5">
          {/* logo and social media are here */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icons.icon className="w-8 h-8 text-white bg-green-500 rounded-xs blur-[1px]" />
              <span className="text-xl font-bold">Euphoria</span>
            </div>
            <p className="text-gray-400 text-sm">
              Enpowering Your Project,Enhancing Your Success,Every Step of the
              Way !
            </p>
            <div className="flex space-x-4 mt-4 md:mt-4">
              <Link
                href="/"
                className="bg-[#1F3F3F] p-2 rounded-sm flex items-center justify-center hover:bg-[#2C5E5E] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Icons.facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="/"
                className="bg-[#1F3F3F] p-2 rounded-sm flex items-center justify-center hover:bg-[#2C5E5E] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Icons.linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="/"
                className="bg-[#1F3F3F] p-2 rounded-sm flex items-center justify-center hover:bg-[#2C5E5E] transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Icons.instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="/"
                className="bg-[#1F3F3F] p-2 rounded-sm flex items-center justify-center hover:bg-[#2C5E5E] transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <Icons.youtube className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Product, Company, Resources */}
          {FOOTER_LINKS.map((category) => (
            <div key={category.title}>
              <h4 className="font-semibold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-[#1f493b] border border-gray-600 rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">Download Our App</h4>

            <div className=" flex-col sm:flex-row gap-3 w-full justify-center">
              <Link href="/">
                <Button
                  variant="white"
                  size="xl"
                  className="rounded-xl px-5 py-3 w-full sm:w-auto "
                >
                  <Icons.googlePlay className="w-6 h-6" />
                  <div className="flex flex-col leading-tight text-left ml-2">
                    <p className="text-xs text-gray-400">Get it On</p>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </Button>
              </Link>

              <Link href="/">
                <Button
                  variant="white"
                  size="xl"
                  className="rounded-xl px-5 py-3 w-full sm:w-auto mt-3"
                >
                  <Icons.appleStore className="w-6 h-6" />
                  <div className="flex flex-col leading-tight text-left ml-2">
                    <p className="text-xs text-gray-400">Download the</p>
                    <span className="font-semibold">App Store</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400 text-sm">
              © 2025 Euphoria. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Privacy Policy</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Terms of Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
