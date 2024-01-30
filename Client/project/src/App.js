import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LoginSignUp from "./pages/LoginSignUp";
/*import BirdPage from "./pages/BirdPage";
import AnswerToQuiz from "./pages/AnswerToQuiz";
import Donate from "./pages/Donate";
import CatsPage from "./pages/CatsPage";
import DOGSPage from "./pages/DOGSPage";
import ADOPTFORM from "./pages/ADOPTFORM";
import Rehome from "./pages/Rehome";*/

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const hideScrollbarStyle = {
    overflow: 'hidden',
  };

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-signup":
        title = "";
        metaDescription = "";
        break;
      /*case "/bird-page":
        title = "";
        metaDescription = "";
        break;
      case "/answer-to-quiz":
        title = "";
        metaDescription = "";
        break;
      case "/donate":
        title = "";
        metaDescription = "";
        break;
      case "/cats-page":
        title = "";
        metaDescription = "";
        break;
      case "/dogs-page":
        title = "";
        metaDescription = "";
        break;
      case "/adopt-form":
        title = "";
        metaDescription = "";
        break;
      case "/rehome":
        title = "";
        metaDescription = "";
        break;*/
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div style={hideScrollbarStyle}>
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/login-signup" element={<LoginSignUp />} />
      </Routes>
    </div>
  );
}
export default App;
