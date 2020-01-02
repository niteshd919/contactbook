import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./Comp/contact/Context";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Comp/contact/Contacts";
import Addcontact from "./Comp/contact/Addcontact";
import Editcontact from "./Comp/contact/Editcontact";
import Navbar from "./Comp/Pages/Navbar";
import About from "./Comp/Pages/About";
import Notfound from "./Comp/Pages/Notfound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          {" "}
          <header className="App-header">
            <Navbar />
          </header>
          <br />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/Addcontact" component={Addcontact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/contact/edit/:id" component={Editcontact} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
