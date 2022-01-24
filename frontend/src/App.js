import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./router/Home";
import Signup from "./router/Signup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Layout 필요 없는 주소 */}
          <Route path="/signup" component={Signup} />
          {/* Layout 필요한 주소 */}
          <Layout>
            <Route exact path="/" component={Home} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;