import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Dictionary defaultWord="Giraffe" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
