import React from "react";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage"; // <-- Import the HomePage

function App() {
  return (
    <div>
      <Header />
      <HomePage /> {/* Add your homepage content here */}
    </div>
  );
}

export default App;
