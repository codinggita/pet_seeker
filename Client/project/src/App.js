import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import LoginSignUp from "./pages/LoginSignUp";
import BirdPage from "./pages/BirdPage";
import AnswerToQuiz from "./pages/AnswerToQuiz";
import Donate from "./pages/Donate";
import CatsPage from "./pages/CatsPage";
import DOGSPage from "./pages/DOGSPage";
import ADOPTFORM from "./pages/ADOPTFORM";
import Rehome from "./pages/Rehome";
import Quiz from "./components/Quiz";
import AdoptFillForm from "./pages/AdoptFilledForm";


function App(props) {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const hideScrollbarStyle = {
    overflow: 'hidden',
    margin:0,
    padding:0,
    height: '100vh',
  };
  const contentContainerStyle = {
    overflowY: 'auto',  // Enable vertical scrolling
    maxHeight: '100vh', // Set a maximum height if needed
    height: '100%', // Set a maximum height if needed
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
      case "/bird-page":
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
        case "/adoptfill-form":
        title = "";
        metaDescription = "";
        break;
      case "/rehome":
        title = "";
        metaDescription = "";
        break;
        

       default 
       :  console.log("No match for this path");
       break;
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
    < div style={contentContainerStyle}>
    <Routes>
   
      <Route path="/" element={<Mainpage />} />
      
      <Route path="/login-signup" element={<LoginSignUp />} />
      <Route path="/bird-page" element={<BirdPage />} />
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/answer-to-quiz" element={<AnswerToQuiz />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/cats-page" element={<CatsPage />} />
      <Route path="/dogs-page" element={<DOGSPage />} />
      <Route path="/adopt-form" element={<ADOPTFORM />} />
      <Route path="/adoptFill-form" element={<AdoptFillForm />} />
      <Route path="/rehome" element={<Rehome />} />
    
    </Routes>

    {console.log("props from parent", props)};
    </div>
    </div>
    
  );
}
export default App;


