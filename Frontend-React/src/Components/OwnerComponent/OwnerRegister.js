import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addOwner } from '../../service/ownerapi';
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
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    ownerPassword: "",

}
//used Register Owner
const OwnerRegister = () => {

    const [owner, setOwner] = useState(initialValue);
    const { ownerName, ownerEmail, ownerPhone, ownerPassword } = owner;

    //declaring history as useHistory
    const history = useHistory();

    //onvaluechange ()
    const onValueChange = (e) => {
        setOwner({ ...owner, [e.target.name]: e.target.value });
        console.log(owner);
    }

    //addOwnerdetails method
    const addOwnerDetails = async () => {

        //checking form validation
        if (ownerName.length <= 2) {
            alert("Username required and it shoud be more than 2 characters")
        }
        else if (ownerEmail.length <= 2) {
            alert("Email required and it shoud be more than 2 characters")
        }
        else if (ownerPassword.length <= 2) {
            alert("Password required and it shoud be more than 2 characters")
        }
        else if (ownerPhone.length <= 2) {
            alert("Phone required and it shoud be more than 2 characters")
        }
        else {
            await addOwner(owner);//adding owner details to table
            notify("Owner Register Successfully!!!!!! Now You can Login")//notifies owner register successfully
            history.push('/owner');//navigating to another oage by using history.push()
        }
    }
    return (
        <div className='bgreg'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Owner Registration Form</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>

                            <Input onChange={(e) => onValueChange(e)} name="ownerName" value={ownerName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Email address</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerEmail" value={ownerEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerPassword" value={ownerPassword} type="password" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Mobile Number</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerPhone" value={ownerPhone} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call addOwnerDetails() */}
                            <Button variant="contained" onClick={() => addOwnerDetails()} color="primary" align="center">Register</Button>
                            <Button onClick={() => history.push("/")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br><br></br>
                            Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/owner")} color="primary" align="center">Login</Button>

                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default OwnerRegister;