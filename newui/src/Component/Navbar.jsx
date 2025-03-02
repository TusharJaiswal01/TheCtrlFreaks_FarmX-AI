import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Track", "Services", "How It Works"];

  return (
    <nav className="absolute top-2 right-4 bg-white/10 backdrop-blur-lg px-3 py-1 rounded-full shadow-lg border border-white/20 flex space-x-2">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          style={{
            backgroundColor: active === item ? "black" : "transparent",
            color: active === item ? "white" : "black",
            padding: "6px 16px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          className="hover:bg-gray-200"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
