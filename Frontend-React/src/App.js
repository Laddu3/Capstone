import './App.css';
import UserLogin from'./Components/UserComponents/UserLogin';
import UserRegister from './Components/UserComponents/UserRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './Components/UserComponents/UserHome';
import OwnerRegister from './Components/OwnerComponent/OwnerRegister';
import OwnerLogin from './Components/OwnerComponent/OwnerLogin';
import OwnerHome from './Components/OwnerComponent/OwnerHome';
import HomePage from './Components/Home/HomePage';
import HomeNavbar from './Components/Home/HomeNavbar';
import ErrorPage from './Components/ErrorPage';

//used to route main navigation
function App() {
  return (
    <Router>
      
      <Switch>
       <Route path="/user" component={UserLogin} exact />
       <Route path="/owner" component={OwnerLogin} exact />
       <Route path="/userregister" component={UserRegister} exact />
       <Route path="/ownerregister" component={OwnerRegister} exact />
      <Route path="/ownerwelcome" component={OwnerHome} exact />
      <Route path="/userwelcome" component={UserHome} exact />
      <Route path="/" component={HomePage} exact />
      <Route path="/nav" component={HomeNavbar} exact />
      <Route path="*" component={ErrorPage}exact/>
      
      </Switch>
    </Router>
  );
}
//exporting App
export default App;
