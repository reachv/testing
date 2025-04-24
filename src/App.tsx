import "./App.css";
import { HashRouter, Routes, Route } from "react-router";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SocialPage from "./SocialPage";
function App() {
  return (
    <>
      <div>
        <ul className="nav bg-dark ms-auto">
          <li className="nav-item">
            <a
              className="nav-link active text-white"
              aria-current="page"
              href="/tester/#/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/tester//#/Socials">
              Socials
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/tester//#/About">
              About
            </a>
          </li>
        </ul>
      </div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Socials" element={<SocialPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
