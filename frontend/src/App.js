import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Characters from "./router/Characters";
import CharactersCreate from "./router/CharactersCreate";
import Home from "./router/Home";
import Signup from "./router/Signup";
import SignupEmail from "./router/SignupEmail";
import Login from "./router/Login";
import Alarm from "./router/Alarm";
import SettingsCharacter from "./router/SettingsCharacter";
import SettingsAccount from "./router/SettingsAccout";
import SettingsAlarm from "./router/SettingsAlarm";
import SettingsHelp from "./router/SettingsHelp";
import Profile from "./router/Profile";
import Follow from "./router/Follow";
import CharactersUpdate from "./router/CharactersUpdate";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* Layout 필요 없는 주소 */}
          <Route exact path="/signup" component={Signup} />
          <Route path="/signup/email" component={SignupEmail} />
          <Route path="/login" component={Login} />
          <Route exact path="/characters/select" component={Characters} />
          <Route exact path="/characters/create" component={CharactersCreate} />
          <Route exact path="/characters/update" component={CharactersUpdate} />
          {/* Layout 필요한 주소 */}
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/settings/character" component={SettingsCharacter} />
            <Route exact path="/settings/account" component={SettingsAccount} />
            <Route exact path="/settings/alarm" component={SettingsAlarm} />
            <Route exact path="/settings/help" component={SettingsHelp} />
            <Route exact path="/alarm" component={Alarm} />
            {/* characters, login, signup같은 닉네임이 있다면 문제 발생 가능 주의 */}
            <Route exact path="/:nickname" component={Profile} />
            <Route exact path="/:nickname/follow" component={Follow} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
