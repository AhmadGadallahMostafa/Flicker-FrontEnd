import List from "./Components/PhotosList/List";
import SignUp from "./Components/SignInUp/SignUp"
import Login from "./Components/SignInUp/Login"
import { AuthProvider } from "./Components/Authorization/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Authorization/PrivateRoute";
import Home from "./Components/Home/Home";
import Forget from "./Components/SignInUp/ForgetPass";
import About from './Components/AboutPage/About';
import Help from './Components/HelpPage/Help'
import Getpro from './Components/Pro/Getpro';
import Proannual from './Components/ProAnnual/pro-annual';
import Promonth from './Components/ProMonthly/pro-monthly';
import Pro3month from './Components/Pro3month/pro-3month';
import GridText from './Components/GridText';
import PrintsButton from './Components/PrintsButton';
import Explore from './Components/Explore';
import FAQ from './Components/FAQ';
import Footer from './Components/MinasFooter/Footer'
import "./App.scss";


function App() {
  return (
      <div className="App">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={List} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/forget" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/reset" component={Forget}/>
              <Route exact path="/about" component={About}/>
      <Route exact path="/account/upgrade/pro" component={Getpro}/>
      <Route exact path="/help" component={Help}/>
      <Route exact path="/account/upgrade/pro/pro-annual" component={Proannual}/>
      <Route exact path="/account/upgrade/pro/pro-monthly" component={Promonth}/>
      <Route exact path="/account/upgrade/pro/pro-3month" component={Pro3month}/>
      <Route path="/prints"> <PrintsButton /> <GridText /> <FAQ /> <Footer /> </Route>
      <Route path="/explore"> <Explore /> <Footer /> </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}
export default App;
