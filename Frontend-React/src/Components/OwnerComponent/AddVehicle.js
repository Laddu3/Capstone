import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { addVehicle } from '../../service/vehicleapi';
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
const myComponent = {
    width: '1000px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll'
};
const initialValue = {
    vehicleName: "",
    vehicleType: "",
    price: "",
    dropping: "",
    distance: "",
    pickup: "",
    ownerName: localStorage.getItem('OName'),
    time: "",
    date: "",

}
//used to add Vehicle details to table
const AddVehicle = () => {

    const [vehicle, setVehicle] = useState(initialValue);
    const { vehicleName, vehicleType, price, dropping, distance, pickup, date, time } = vehicle;

    //declaring history as useHistory
    const history = useHistory();
    //used to value change in form
    const onValueChange = (e) => {
        //changing vehicle details
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        //displaying vehicle details in console
        console.log(vehicle);
    }

    //used to add vehicle details for calling addVehicle Method
    const addVehicleDetails = async () => {
        //calling addVehicle method present in vehicleapi.js
        await addVehicle(vehicle);
        //notifying vehicle is added successfully
        notify("Vehicle Added Successfully")
        //navigating to another page using history.push
        history.push('/allvehicles');
    }

    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Adding Vehicle</Typography>
                    <FormGroup>

                        <FormControl>
                            <InputLabel>Enter Vehicle Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="vehicleName" value={vehicleName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Vehicle Type(2 or 4 wheeler)</InputLabel>
                            <Select value={vehicleType} onChange={(e) => onValueChange(e)} name="vehicleType">
                                <MenuItem value={"2 wheeler"}>2 wheeler</MenuItem>
                                <MenuItem value={"4 wheeler"}>4 wheeler</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Staring Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="pickup" value={pickup} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Dropping Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="dropping" value={dropping} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Distance</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="distance" value={distance} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Price</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Date of Ride</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Time of Ride</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>
                        <Box my={3}>

                            {/* calling addVehicleDetails() when button is clicked */}
                            <Button variant="contained" onClick={() => addVehicleDetails()} color="primary" align="center">Add Vehicle</Button>
                            <Button onClick={() => history.push("/welcome")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            <br></br><br></br>


                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

//exporting AddVehicle 
export default AddVehicle;