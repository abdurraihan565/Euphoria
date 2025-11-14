"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";
import { Button } from "../ui/button";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-[#0A2E2E] backdrop-blur-md z-50 h-20">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2">
            <Icons.icon className="w-8 h-8 text-white bg-green-500 rounded-sm blur-[1px]" />
            <span className="text-xl font-semibold hidden lg:block text-accent">
              Euphoria
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={index}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="white" size="sm" className="rounded-full py-5">
              Get Started
            </Button>

            <Button variant="green" size="sm" className="rounded-full py-5">
              Get Started
            </Button>
          </div>

          {/* Mobile toggle is here */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu is here */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#0A2E2E] border-t border-emerald-800/30 px-4 py-4 space-y-3">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="block text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <button className="w-full bg-emerald-500 text-white px-6 py-2 rounded-full mt-4">
              Get Started
            </button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
