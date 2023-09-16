import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}
//used to perform user logout operation
const UserLogout = () => {

    const history=useHistory()
    //notifies Logout successfully
    notify("Logout Successfully")
    //navigating to another page using history.push()
    history.push("/")

   
}
//exporting UserLogout
export default UserLogout;