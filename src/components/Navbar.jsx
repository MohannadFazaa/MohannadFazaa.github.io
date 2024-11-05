import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Lägg till "scrolled" när man scrollar mer än 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">WD Svets&Montage</div>
      <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
        <li onClick={() => scrollToSection("start")}>Start</li>
        <li onClick={() => scrollToSection("service")}>Tjänster</li>
        <li onClick={() => scrollToSection("about")}>Om Oss</li>
        <li onClick={() => scrollToSection("contact")}>Kontakt</li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "Stäng" : "Meny"}
      </button>
    </nav>
  );
};

export default Navbar;
