import '../../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminWelcome from './OwnerWelcome';
import AddVehicle from './AddVehicle';
import AllVehicles from './AllVehicles';
import UpdateVehicle from './UpdateVehicle';
import OwnerApproveVehicle from './OwnerApproveVehicle';
import ApproveConfirm from './ApproveConfirm';
import OwnerProfile from './OwnerProfile';
import HomePage from '../Home/HomePage';
import AllmyVehBooking from './AllmyVehBooking';
import MessagesOwner from './MessagesOwner';
import ReplyMessage from './ReplyMessage';
import OwnerLogout from './OwnerLogout';

//used to route navigation for Owner
function OwnerHome() {
  return (
    <Router>
      <AdminWelcome />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/logout" component={OwnerLogout} exact />
        <Route path="/myvehbookings" component={AllmyVehBooking} exact />
        <Route path="/profile" component={OwnerProfile} exact />
        <Route path="/addvehicle" component={AddVehicle} exact />
        <Route path="/ownermessages" component={MessagesOwner} exact />
        <Route path="/allvehicles" component={AllVehicles} exact />
        <Route path="/update/:id" component={UpdateVehicle} exact />
        <Route path="/oreply/:id" component={ReplyMessage} exact />
        <Route path="/bookingapprove" component={OwnerApproveVehicle} exact />
        <Route path="/approved/:id" component={ApproveConfirm} exact />   
      </Switch>
    </Router>
  );
}
//exportiong OwnerHome
export default OwnerHome;
