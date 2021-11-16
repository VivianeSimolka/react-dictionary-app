import React from "react";
import Footer from "./Footer";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <Footer />
      </div>
    </div>
  );
}
