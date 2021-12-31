import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from "./recomp/Games";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Route exact path="/" component={Games} />
    </Router>
  );
}
