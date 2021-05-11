// import Spinner from "react-bootstrap/Spinner";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./component/NavTabs";
 import home from "./component/home";
import about from "./component/about";
import Footer from "./component/footer";
import Header from "./component/header";
import contact from "./component/contact";
import project from "./component/project";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={home} />
        <Route exact path="/project" component={project} />
        <Route exact path="/about" component={about} />
        <Route exact path="/contact" component={contact} />
        {/* <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */} 
      </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;