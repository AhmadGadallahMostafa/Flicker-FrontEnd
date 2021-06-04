import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './About';
import Help from './Help'
import Getpro from './Getpro';
import Proannual from './pro-annual';
import Promonth from './pro-monthly';
import Pro3month from './pro-3month';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridText from './components/GridText';
import PrintsButton from './components/PrintsButton';
import Explore from './components/Explore';
import FAQ from './components/FAQ';

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
      <Route path="/prints"> <PrintsButton /> <GridText /> <FAQ /> </Route>
      <Route path="/explore"> <Explore /> </Route>
    </Switch>
    </BrowserRouter>
  );
}
export default App;