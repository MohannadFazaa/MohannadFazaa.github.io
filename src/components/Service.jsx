import React, { useState } from "react";

const Service = () => {
  const [visibleImagesCount] = useState(9);

  const images = [
    { src: require("../Images/kok.jpg"), description: "Köksmontering" },
    { src: require("../Images/Verktyg.jpg"), description: "Verktygscontainer" },
    { src: require("../Images/Rum.jpg"), description: "Rum Anpassning" },
    { src: require("../Images/Dorr.jpg"), description: "Dörrinstallation" },
    { src: require("../Images/Hyllor.jpg"), description: "Hyllor" },
    { src: require("../Images/Window.jpg"), description: "Fönster" },
    { src: require("../Images/Metal.jpg"), description: "Rum Anpassning" },
    { src: require("../Images/All.jpg"), description: "Övrigt" },
    { src: require("../Images/rum2.jpg"), description: "Övrigt" },
  ];

  return (
    <section id="service" className="service-section">
      <div className="service-header">
        <h1 className="service-title">Våra Tjänster</h1>
        <p className="service-description">
          Vi erbjuder skräddarsydda lösningar för containrar, inklusive
          isolering, fönsterinstallationer, interiöranpassning samt säkerhets-
          och låssystem. Våra tjänster omfattar även professionell svetsning och
          reparation för hållbara och pålitliga resultat.
        </p>
      </div>
      <div className="image-gallery">
        {images.slice(0, visibleImagesCount).map((image, index) => (
          <div key={index} className="image-card">
            <div className="image-wrapper">
              <img src={image.src} alt={image.description} className="image" />
              <div className="image-overlay">
                <p className="image-caption">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="button-group">
        {visibleImagesCount < images.length ? (
          <button onClick={showMoreImages} className="btn btn-show-more">
            Se Mer
          </button>
        ) : (
          <button onClick={showLessImages} className="btn btn-show-less">
            Visa Färre
          </button>
        )}
      </div> */}
    </section>
  );
};

export default Service;
