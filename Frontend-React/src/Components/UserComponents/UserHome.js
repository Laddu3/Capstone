import '../../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserWelcome from './UserWelcome';
import BookRide from './BookRide';
import WaitingConfirm from './WaitingConfirm';
import AllWaitingVehicles from './AllWaitingVehicles';
import AllBookings from './AllBookings';
import UserProfile from './UserProfile';
import UserLogin from './UserLogin';
import MessagesUser from './MessagesUser';
import UserReplyMessage from './UserReplyMessage';
import FirstUserMessage from './FirstUserMessage';
import UserLogout from './UserLogout';


//used to route the user navigation
function UserHome() {
  return (
    <Router>
   
      <UserWelcome />
      <Switch>
        <Route path="/user" component={UserLogin} exact />
        <Route path="/ulogout" component={UserLogout} exact />
        <Route path="/userprofile" component={UserProfile} exact />
        <Route path="/ride" component={BookRide} exact />
        <Route path="/usermessages" component={MessagesUser} exact />
        <Route path="/message/:id" component={FirstUserMessage} exact />
        <Route path="/ureply/:id" component={UserReplyMessage} exact />
        <Route path="/booking" component={AllBookings} exact />
        <Route path="/confirm/:id" component={WaitingConfirm} exact />
        <Route path="/waitingapprove" component={AllWaitingVehicles} exact />      
      </Switch>
    </Router>
  );
}
//exporting UserHome
export default UserHome;
