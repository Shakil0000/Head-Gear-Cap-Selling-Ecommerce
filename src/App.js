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
                                    <TrandingCap></TrandingCap>
                                    <SectionEight></SectionEight>
                                    <SectionNine></SectionNine>
                                    <AddItem></AddItem>
                                    <NewArrival></NewArrival>

        </> } />
        <Route path="/productDetails/:id" element={<ProductDetails toggleCart={toggleCart}/>} />
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
       
       <Footer></Footer>
    </div>
  );
}

export default App;
