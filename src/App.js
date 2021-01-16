import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects";

import "./App.css";

function App() {
  // const [header,setHeader] = useState(false);
  // const sidebar = !header?<hamburger></hamburger>:<Sidebar></Sidebar>
  return (
    <Router>
      <div>
        <Header></Header>
        {/* {sidebar} */}
        {/* <Sidebar></Sidebar> */}
        <div className="Container">
          <Switch>
            <Route exact path = "/" component= {Home}></Route>
            <Route exact path = "/about" component= {About}></Route>
            <Route exact path = "/projects" component= {Projects}></Route>
            <Route exact path = "/contact" component= {Contact}></Route>
            <Home></Home>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
