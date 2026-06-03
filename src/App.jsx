import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Microcontrollers from "./pages/Microcontrollers";
import Sensors from "./pages/Sensors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PIR from "./pages/sensors/PIR";
// ✅ OLD WORKING SENSOR PAGES
import DHT11 from "./pages/sensors/DHT11";
import HCSR04 from "./pages/sensors/HCSR04";
import IR from "./pages/sensors/IR";

import MicrocontrollerDetail from "./pages/MicrocontrollerDetail";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
<Route path="/sensors/ir" element={<IR />} />

<Route path="/sensors/pir" element={<PIR />} />

          <Route path="/microcontrollers" element={<Microcontrollers />} />
          <Route path="/microcontrollers/:slug" element={<MicrocontrollerDetail />} />

          {/* ✅ RESTORED SENSOR ROUTES */}
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/sensors/dht11" element={<DHT11 />} />
          <Route path="/sensors/hcsr04" element={<HCSR04 />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
