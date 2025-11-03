import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter  basename="/Rainbowprimex">
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;