import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Details from "./pages/Details";
import Orders from "./pages/Orders";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
