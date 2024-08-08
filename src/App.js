import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Example from "./Pages/Example";
import ExampleOne from "./Pages/ExampleOne";
import BisneyBlus from "./Pages/BisneyBlus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/exampleone" element={<ExampleOne />} />
        <Route path="/bisneyblus" element={<BisneyBlus />} />

        {/* Example */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
