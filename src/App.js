import "./App.css";
import AllJobs from "./components/AllJobs";
import NewJob from "./components/NewJob";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen flex flex-col gap-10">
          <Nav />
          <div className="mt-16">
            <Switch>
              <Route exact path="/">
                <AllJobs />
              </Route>
              <Route path="/addNew">
                <NewJob />
              </Route>
              <Route path="/allJobs">
                <AllJobs />
              </Route>
              <Route path="/goToGoogle"
       render={() => window.location = "https://www.google.com"} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
