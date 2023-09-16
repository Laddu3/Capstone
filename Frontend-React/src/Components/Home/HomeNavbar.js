import '../../App.css';
import Navbar from './Navbar';
import UserLogin from '../UserComponents/UserLogin';
import UserRegister from '../UserComponents/UserRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from '../UserComponents/UserHome';
import OwnerRegister from '../OwnerComponent/OwnerRegister';
import OwnerLogin from '../OwnerComponent/OwnerLogin';
import OwnerHome from '../OwnerComponent/OwnerHome';
import HomePage from './HomePage';

//this funtion is used to route navigation
function HomeNavbar() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path="/user" component={UserLogin} exact />
        <Route path="/owner" component={OwnerLogin} exact />
        <Route path="/userregister" component={UserRegister} exact />
        <Route path="/ownerregister" component={OwnerRegister} exact />
        <Route path="/ownerwelcome" component={OwnerHome} exact />
        <Route path="/userwelcome" component={UserHome} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
}
//exporting homebar
export default HomeNavbar;