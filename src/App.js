import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalogues from "./pages/Catalogues";
import About from "./pages/About";

import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/catalogues" exact component={Catalogues} />
          <Route path="/about" exact component={About} />
          
        </Routes>
        <About />
        <Catalogues />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
