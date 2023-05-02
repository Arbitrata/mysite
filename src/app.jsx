import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { Home } from "./components/pages/Home";
import Footer from "./components/common/Footer";
import Button from "./components/common/Button";
import { BiArrowToTop } from "react-icons/bi";
import { goToTop } from "./components/common/ScrollToTop";
import Contact from "./components/pages/Contact";
import renderText from "./components/common/RenderContactPage";
import { NotFound } from "./components/pages/NotFound";

function App() {
  const [activeText, setActiveText] = useState("");
  const [activeForm, setActiveForm] = useState("");

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.pageYOffset > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      checkScrollTop();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div style={{ display: showScroll ? "block" : "none" }}>
        <Button
          onClick={goToTop}
          link={true}
          text={<BiArrowToTop size={30} />}
          styling={
            "fixed bg-black lg:right-2 right-0 bottom-2 lg:p-2 p-0 text-greenblue rounded-full z-50 shadow"
          }
        />
      </div>

      <Routes>
        <Route path="">
          <Route
            index
            element={
              <Home
                renderText={renderText}
                setActiveText={setActiveText}
                setActiveForm={setActiveForm}
              />
            }
          />

          <Route
            path="/contact"
            element={
              <Contact
                renderText={renderText}
                setActiveText={setActiveText}
                activeText={activeText}
                activeForm={activeForm}
                setActiveForm={setActiveForm}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
