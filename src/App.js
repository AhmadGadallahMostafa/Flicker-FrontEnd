import "./App.scss";
import List from "./Components/PhotosList/List";
import SignUp from "./Components/SignInUp/SignUp"
import Login from "./Components/SignInUp/Login"
import { AuthProvider } from "./Components/Authorization/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Authorization/PrivateRoute";
import Home from "./Components/Home/Home";
import Forget from "./Components/SignInUp/ForgetPass";

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
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  );
}

export default App;
