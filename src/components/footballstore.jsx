import React from "react";
import logo from "../assets/logo.jpg"; // apna logo daalna

// ⚽ Products list (images local ya online link daal dena)
const products = [
  {
    id: 1,
    img: "https://myfootballstore.co.in/cdn/shop/files/Away-PV-1-1_2.png?v=1757051480&width=360",
  },
  {
    id: 2,
    img: "https://myfootballstore.co.in/cdn/shop/files/JN8479_HM31.jpg?v=1756408245&width=360",
  },
  {
    id: 3,
    img: "https://myfootballstore.co.in/cdn/shop/files/thriftellc.in_post_09_08_2025_18_24_133695383404620785508.jpg?v=1756411199&width=360",
  },
  {
    id: 4,
    img: "https://myfootballstore.co.in/cdn/shop/files/real-madrid-emerald-flame-premium-kids-size-kit-footballprestigecom-2025-premium-quality-340879_1.jpg?v=1756408076&width=360",
  },
  {
    id: 5,
    img: "https://myfootballstore.co.in/cdn/shop/files/f5782abc74d5dc94.jpg?v=1754673754&width=360",
  },
  {
    id: 6,
    img: "https://myfootballstore.co.in/cdn/shop/files/FC_Bayern_25-26_Home_Jersey_Red_JJ2137_01_laydown.jpg?v=1754067003&width=360",
  },
  {
    id: 7,
    img: "https://myfootballstore.co.in/cdn/shop/files/IMG_9388.jpg?v=1752779981&width=360",
  },
  {
    id: 8,
    img: "https://myfootballstore.co.in/cdn/shop/files/7c42a894.jpg?v=1751119630&width=360",
  },
  {
    id: 9,
    img: "https://myfootballstore.co.in/cdn/shop/files/BUY-BARCELONA-HOME-2014-15-RETRO-FOOTBALL-JERSEY_1.webp?v=1752258699&width=360",
  },
];

const FootballStore = () => {
  return (
    <div className=" min-h-screen text-white  bg-slate-700">
      {/* Profile Header */}
      <div className="flex flex-col items-center py-6">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 rounded-full border-4 border-white mb-3"
        />
        <h1 className="text-2xl font-bold">My Football Store Official</h1>
        <p className="text-gray-400 text-sm mt-2 text-center">
          🏆 Trusted by 1M+ customers since 2016 <br />
          📺 As seen on CNN, NDTV & TimesNow <br />
          🚚 Free Delivery India | 75% OFF
        </p>
        <a
          href="https://myfootballstore.co.in"
          className="text-blue-400 underline mt-2"
          target="_blank"
          rel="noreferrer"
        >
          myfootballstore.co.in
        </a>
      </div>

      {/* Highlight (Just Released) */}
      <div className="flex justify-center py-4  bg-slate-700">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden">
            <img
              src="/jerseys/just-released.jpg"
              alt="Just Released"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xs mt-2">JUST RELEASED</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 bg-slate-700">
        {products.map((item) => (
          <div
            key={item.id}
            className="aspect-square overflow-hidden rounded-2xl w-100 h-100"
          >
            <img
              src={item.img}
              alt="Jersey"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FootballStore;
