import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../service/userapi';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const initialValue = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",

}
//used to register user
const UserRegister = () => {

    const [user, setUser] = useState(initialValue);
    const { userName, userEmail, userPassword, userPhone } = user;
    //declering history as useHistory()
    const history = useHistory();

    //onchange value ()
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    //used to adduser details to table
    const addUserDetails = async () => {
        if (userName.length <= 2) {
            alert("Username required and it shoud be more than 2 characters")
        }
        else if (userEmail.length <= 2) {
            alert("Email required and it shoud be more than 2 characters")
        }
        else if (userPassword.length <= 2) {
            alert("Password required and it shoud be more than 2 characters")
        }
        else if (userPhone.length <= 2) {
            alert("Phone required and it shoud be more than 2 characters")
        }
        else {
            await addUser(user);//adding user details to table
            notify("User Register Successfully!!!!!! Now You can Login")//notifies user register successfully
            history.push('/user');//naviate to another page using history.push()
        }
    }

    return (
        <div className='bgreg'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">User Registration Form</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Email address</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userEmail" value={userEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPassword" value={userPassword} type="password" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Mobile Number</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPhone" value={userPhone} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call addUserDetails() */}
                            <Button variant="contained" onClick={() => addUserDetails()} color="primary" align="center">Register</Button>
                            <Button onClick={() => history.push("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br><br></br>
                            Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/user")} color="primary" align="center">Login</Button>

                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

//exporting UserRegister
export default UserRegister;