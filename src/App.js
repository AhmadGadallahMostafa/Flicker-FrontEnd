import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './About';
import Help from './Help'
import Getpro from './Getpro';
import Proannual from './pro-annual';
import Promonth from './pro-monthly';
import Pro3month from './pro-3month';



function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/about" component={About}/>
      <Route exact path="/account/upgrade/pro" component={Getpro}/>
      <Route exact path="/help" component={Help}/>
      <Route exact path="/account/upgrade/pro/pro-annual" component={Proannual}/>
      <Route exact path="/account/upgrade/pro/pro-monthly" component={Promonth}/>
      <Route exact path="/account/upgrade/pro/pro-3month" component={Pro3month}/>
    </Switch>
    </BrowserRouter>
  );
}
export default App;
