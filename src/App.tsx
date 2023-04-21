import "./App.css";
import Header from "./components/header";
import bg_pc from "./assets/images/bg_pc.png";
import bg_mb from "./assets/images/bg_mb.png";
import * as rdd from "react-device-detect";
import Section1 from "./components/sections/section1";
import Section2 from "./components/sections/section2";
import Section3 from "./components/sections/section3";
import Section4 from "./components/sections/section4";
import Section5 from "./components/sections/section5";
import Section6 from "./components/sections/section6";
import Section7 from "./components/sections/section7";
import Footer from "./components/sections/footer";

function App() {
  const bg = rdd.isMobile ? bg_mb : bg_pc;
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {" "}
      <Header />
      <div className="container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
