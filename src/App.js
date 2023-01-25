import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/home-page";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
