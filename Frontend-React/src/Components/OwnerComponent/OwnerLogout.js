import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

//const notify = (msg) => {

    //toast.success(msg, {

        //position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        //pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    //});

//}
//used to Owner Logout Operation
const OwnerLogout = () => {

    const history=useHistory()
    //notifies Logout successfully
    alert("Logout Successfully")
    //navigate to another page using history.push()
    history.push("/")

   
}
//exporting OwnerLogout
export default OwnerLogout;