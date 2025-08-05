import Link from "next/link";

// components/shared/Footer/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Careers</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Blog</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Press</Link></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-400">Help Center</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Safety Center</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Community Guidelines</Link></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-400">Cookies Policy</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Terms of Service</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Law Enforcement</Link></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-gray-400">Email Us</Link></li>
            <li><Link href="/" className="hover:text-gray-400">+1 (123) 456-7890</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Location</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Social Media</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
}
