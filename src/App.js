import Navbar from "./components/Navbar"
import Test from "./components/Test"
import Slider from "./components/Slider";
import Hero from "./components/Hero.jsx"
import ScrollToTop from "./components/ScrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/store";
import FigureItem from "./pages/FigureItem";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/figure/:id" element={<FigureItem />} />
      <Route path="/checkout" element={<CheckoutPage/>} />
    </Routes>
    <Footer/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
