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


    ownerEmail: "",

    ownerPassword: "",

}

//used to check the login of Owner

function OwnerLogin() {


    const [db, setDb] = useState(initialValue);


    //Declering history as useHistory
    const history = useHistory();
    //this is onvaluechange method
    const onValueChange = (e) => {
        setDb({ ...db, [e.target.name]: e.target.value });
        console.log(db);
    }
    //used to check Owneris present in owner table or  not
    async function ownerPresent(data) {
        if (data.ownerEmail.length <= 2) {
            alert("Email Should be more than 2 characters")
        }
        else if (data.ownerPassword.length <= 2) {
            alert("Password Should be more than 2 characters")
        }
        else {
            //fetching Owners details by using API
            let check_data = await fetch("http://localhost:8081/owner/owners");
            let check = await check_data.json();

            let flag = false;
            //displaying all Owners details
            console.log(check);
            for (let i = 0; i < check.length; i++) {
                //here checking Owner login
                if (check[i].ownerEmail === data.ownerEmail && check[i].ownerPassword === data.ownerPassword) {
                    flag = true;
                    //Storing all owner details in local storage
                    localStorage.setItem('OName', check[i].ownerName);
                    localStorage.setItem('OEmail', check[i].ownerEmail);
                    localStorage.setItem('OPhone', check[i].ownerPhone);
                    localStorage.setItem('OId', check[i].ownerId);
                }
            }
            //cheking flag value 
            if (flag === true) {
                //notifyies Login success
                alert("Login success")
                console.log(check);
                //navigating to another page using history.push method
                history.push("/ownerwelcome")
            }
            else {
                //notifies Login not success
                notifyErr("Please Enter corect username and password")
            }
        }
    }
    return (
        <div className='bgreg'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center"><label>Owner Login</label></Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Enter Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerEmail" value={db.ownerEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerPassword" value={db.ownerPassword} type="password" />
                        </FormControl>
                        <Box my={3}>
                            {/* calling ownerPresent() when clicking this button */}
                            <Button variant="contained" onClick={() => ownerPresent(db)} color="primary" align="center">Login</Button>
                            <Button onClick={() => history.push("/owner")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br />
                            {/* if we click this button it will goes to register page */}
                            New Owner? Please Register <Button variant="contained" onClick={() => history.push("/ownerregister")} color="primary" align="center">Register</Button>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

//exporting OwnerLogin
export default OwnerLogin;