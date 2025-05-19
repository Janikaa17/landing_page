import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="w-full pt-4 pb-4"
      style={{
        backgroundColor: "#D4A76A",
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'4\' numOctaves=\'8\' stitchTiles=\'stitch\'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type=\'linear\' slope=\'1.5\'/%3E%3C/feComponentTransfer%3E%3CfeGaussianBlur stdDeviation=\'0.05\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}
    >
      {/* Full-width black line at the top */}
      <div className="w-full border-t-2 border-black mb-4 " />
      <div className="max-w-6xl mx-auto px-4 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          {/* Left: Logo and copyright */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="mb-6">
              <Link to="/" className="text-lg font-bold text-black">
                TAG4Change
              </Link>
            </div>
            <div className="text-black">
              <p>© {new Date().getFullYear()} TAG4Change,<br />All rights reserved</p>
            </div>
          </div>

          {/* Center: Pages */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="font-semibold text-black mb-4">PAGES</div>
            <ul className="space-y-2 text-black">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>

          {/* Right: Contact info */}
          <div className="flex-1">
            <div className="font-semibold text-black mb-4">CONTACT</div>
            <div className="text-black space-y-2">
              <div>TAG4Change</div>
              <div>123 Change Street</div>
              <div>City, Country</div>
              <div>+123 456 7890</div>
              <div>info@tag4change.org</div>
              <div>
                <a
                  href="https://www.instagram.com/tag4change/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-black hover:text-gray-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.25" cy="6.75" r="1" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

