import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
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
const notifyErr = (msg) => {

    toast.error(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}
const initialValue = {


    userEmail: "",

    userPassword: "",

}

//used to check the login

function UserLogin() {


    const [db, setDb] = useState(initialValue);


    const history = useHistory();


    const onValueChange = (e) => {

        setDb({ ...db, [e.target.name]: e.target.value });

        console.log(db);

    }
    //used to check the user is present in user table ot not
    async function userPresent(data) {
        if (data.userEmail.length <= 2) {
            alert("Email Should be more than 2 characters")
        }
        else if (data.userPassword.length <= 2) {
            alert("Password Should be more than 2 characters")
        }
        else {
            //fethcing all users data using API
            let check_data = await fetch("http://localhost:8082/user/users");
            let check = await check_data.json();
            let flag = false;
            console.log(check);
            for (let i = 0; i < check.length; i++) {
                //here checking user login
                if (check[i].userEmail === data.userEmail && check[i].userPassword === data.userPassword) {
                    flag = true;
                    //storing all user details in localstorage
                    localStorage.setItem('UName', check[i].userName);
                    localStorage.setItem('UId', check[i].userId);
                    localStorage.setItem('UEmail', check[i].userEmail);
                    localStorage.setItem('UPhone', check[i].userPhone);
                }
            }
            if (flag === true) {
                notify("Login success")
                //navigate to another page using history.push
                history.push("/userwelcome")
            }
            else {
                notifyErr("Please Enter corect username and password")
            }
        }
    }
    return (
        <div className='bgreg'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">User Login</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Enter Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userEmail" value={db.userEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPassword" value={db.userPassword} type="password" />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call userPresent() */}
                            <Button variant="contained" onClick={() => userPresent(db)} color="primary" align="center">Login</Button>
                            <Button onClick={() => history.push("/user")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br>
                            New User? Please Register <Button variant="contained" onClick={() => history.push("/userregister")} color="primary" align="center">Register</Button>
                            <br></br><br></br>

                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}
//exporting UserLogin
export default UserLogin;