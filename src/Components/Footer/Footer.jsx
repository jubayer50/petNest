import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#ED8262] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div>
            <Link href={"/"}>
              <h2 className="text-3xl font-bold">PetNest</h2>
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-200">
              PetNest helps loving pets find caring homes. Discover adorable
              companions and make a forever connection through safe and trusted
              adoption.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-gray-200">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-pets" className="transition hover:text-white">
                  All Pets
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>

            <div className="space-y-3 text-sm text-gray-200">
              <p>📍 Mirpur, Dhaka, Bangladesh</p>

              <p>📞 +880 1234-567890</p>

              <p>✉️ support@petnest.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#021525]"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#021525]"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#021525]"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-[#021525]"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-200">
          © 2026 PetNest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
