import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./redux/store";
import FigureItem from "./pages/FigureItem";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import SignUp from "./pages/SignUp";


const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/authorization';
  const isUserPage = location.pathname === '/userpage';
  const isSignUpPage = location.pathname === '/signup';


  return (
    <>
      {!isLoginPage && !isUserPage && !isSignUpPage &&  <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/figure/:id" element={<FigureItem />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isLoginPage && !isUserPage && !isSignUpPage && <Footer />}
    </>
  );
};

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
