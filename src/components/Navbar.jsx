import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import React from "react";
import { NavbarMenu } from "../mockData/data";
import faces from "../assets/faces.jpg";

const grainyBg = {
  backgroundColor: "#D4A76A",
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'2\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeGaussianBlur stdDeviation=\'0.05\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
};

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className="w-full border-b border-black flex items-center justify-between px-12 h-16"
      style={grainyBg}
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-20 w-17 object-contain" />
              <span className="uppercase tracking-widest text-base font-medium px-0 py-1 font-sans">TAG4Change</span>
      </div>
      <ul className="flex items-center gap-10">
        {NavbarMenu.map((menu) => (
          <li key={menu.id}>
            <Link
              to={menu.link}
              className={`uppercase tracking-widest text-base font-medium px-3 py-1 rounded-sm transition-all duration-200
                ${location.pathname === menu.link ? "border-b-2 border-black pb-1" : ""}`}
              style={
                location.pathname === menu.link
                  ? grainyBg
                  : undefined
              }
              onMouseEnter={e => {
                Object.assign(e.target.style, grainyBg, { border: '1px solid #000', borderRadius: '0.125rem' });
              }}
              onMouseLeave={e => {
                  Object.assign(e.target.style, location.pathname === menu.link ? grainyBg : { background: 'grainyBg', border: '', borderRadius: '' });
              }}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;