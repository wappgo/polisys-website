import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/homeComponent/index.js";
import ContactUs from "./component/contactUsComponent/index.js";
import Insights from "./component/insightsComponent/index.js";
import AboutUs from "./component/AboutUsComponent/index.js";
import Service from "./component/Services/index.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";

// import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';


function App() {

  return ( 
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about-us" element={<AboutUs/>}/>
      <Route exact path="/contact-us" element={<ContactUs/>}/>
      <Route exact path="/darkeye" element={<Insights/>}/>
      <Route exact path="/services" element={<Service/>}/>
      {/* <Route exact path="/reviews" element={<ReviewPage/>}/>
      <Route exact path="/terms-condition" element={<TermsCondition/>}/>
      <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    {/* <ToastContainer theme="colored" /> */}
   </div>
  )
}

export default App;
