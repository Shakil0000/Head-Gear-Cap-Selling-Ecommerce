import logo from './logo.svg';
import './App.css';
import Navbar from './Component/HomePage/Navbar/Navbar';
import Footer from './Component/HomePage/Footer/Footer';
import AddItem from './Component/Controller/AddItem/AddItem';
import MainMenu from './Component/HomePage/MainMenu/MainMenu';
import Carousel from './Component/HomePage/Carousel/Carousel';
import SectionOne from './Component/HomePage/MiddleSection/SectionOne/SectionOne';
import SectionTwo from './Component/HomePage/MiddleSection/SectionTwo/SectionTwo';
import SectionThree from './Component/HomePage/MiddleSection/SectionThree/SectionThree';
import SectionFour from './Component/HomePage/MiddleSection/SectionFour/SectionFour';
import SectionFive from './Component/HomePage/MiddleSection/SectionFive/SectionFive';
import SectionSix from './Component/HomePage/MiddleSection/SectionSIx/SectionSix';
import TrandingCap from './Component/HomePage/MiddleSection/SectionSEven/TrendingCap/TrandingCap';
import SectionEight from './Component/HomePage/MiddleSection/SectionEight/SectionEight';
import SectionNine from './Component/HomePage/MiddleSection/SectionNine/SectionNine';
import MapSection from './Component/HomePage/MiddleSection/SectionNine/MapSection/MapSection';
import NewArrival from './Component/NewArrival/NewArrival';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import { useState } from 'react';
import CheckOut from './Component/CheckOut/CheckOut';
import Search from './Component/Search/Search';
import OrderDeliveryPolicy from './Component/Policy/OrderDeliveryPolicy/OrderDeliveryPolicy';
import AboutUs from './Component/Policy/AboutUs/AboutUs';
import TermsAndCondition from './Component/Policy/TermsAndCondition/TermsAndCondition';
import ReturnRefundPolicy from './Component/Policy/ReturnRefundPolicy/ReturnRefundPolicy';
import PrivacyPolicy from './Component/Policy/PrivacyPolicy/PrivacyPolicy';
import ShippingPolicy from './Component/Policy/ShippingPolicy/ShippingPolicy';
import BlogsPage from './Component/Policy/BlogsPage/BlogsPage';
import LoyaltyProgram from './Component/Policy/LoyaltyProgram/LoyaltyProgram';
import FAQ from './Component/Policy/FAQ/FAQ';
import Login from './Component/User/Login/Login';
import CreateAccount from './Component/User/CreateAccount/CreateAccount';
import ForgotPassword from './Component/User/ForgotPassword/ForgotPassword';
import Temp from './Component/Temp/Temp';
import Profile from './Component/User/Profile/Profile';
import OrderTracker from './Component/OrderTracker/OrderTracker';


function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  


  return (
    <div className="App">

      <Navbar cartOpen={cartOpen} toggleCart={toggleCart}></Navbar>
      <MainMenu></MainMenu>

      <Routes>
        <Route path="/" element={ <>
                                    <Carousel></Carousel>
                                    <SectionOne></SectionOne>
                                    <SectionTwo></SectionTwo>
                                    <SectionThree></SectionThree>
                                    <SectionFour></SectionFour>
                                    <SectionFive></SectionFive>
                                    <SectionSix></SectionSix>
                                    <NewArrival></NewArrival>
                                    <SectionEight></SectionEight>
                                    <SectionNine></SectionNine>
                                   

        </> } />

        <Route path="/new-arrival" element={<NewArrival/>} />
        <Route path="/productDetails/:id" element={<ProductDetails toggleCart={toggleCart}/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/search" element={<Search/>} />

        <Route path="/order-and-delivery-policy" element={<OrderDeliveryPolicy/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition/>} />
        <Route path="/return-and-refund-policy" element={<ReturnRefundPolicy/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/blog/first-cap-brand" element={<BlogsPage />} />
        <Route path="/loyalty-program" element={<LoyaltyProgram />} />
        <Route path="/order-tracker" element={<OrderTracker />} />
        <Route path="/faq" element={<FAQ />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
