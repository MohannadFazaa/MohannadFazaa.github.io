import React from "react";

const Start = () => {
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="start" className="start-section">
      <div className="start-overlay"></div>
      <div className="start-content">
        <h1 data-text="Välkommen till Vårt Containerföretag">
          Välkommen till WD Svets&Montage
        </h1>
        <p>
          Vi levererar toppkvalitativa lösningar för alla dina containerbehov.
          Våra skräddarsydda tjänster hjälper dig att skapa hållbara och
          flexibla lösningar som passar just dig.
        </p>
        <button
          className="cta-button"
          onClick={() => scrollToSection("service")}
        >
          Utforska Våra Tjänster
        </button>
      </div>
    </section>
  );
};

export default Start;
