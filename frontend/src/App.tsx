import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Operador } from "./pages/Operador";
import { Volante } from "./pages/Volante";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Operador />} />
        <Route path="/volante" element={<Volante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;