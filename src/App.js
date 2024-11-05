// App.jsx
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Start />
        <Service />
        <AboutUs />
        <Contact />
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>© 2024 WD Svets&Montage</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
