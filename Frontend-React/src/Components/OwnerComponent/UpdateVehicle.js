import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getallVehicles, editVehicle } from '../../service/vehicleapi';
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
    time: "",
    date: "",
    ownerName: ""

}
//used to Update vehicle details
const UpdateVehicle = () => {

    const [vehicle, setVehicle] = useState(initialValue);
    const { vehicleName, vehicleType, price, dropping, distance, pickup, time, date } = vehicle;

    //getting id as a param
    const { id } = useParams();

    useEffect(() => {
        //calling loadingvehicledata()
        loadVehicleData();
    }, []);

    //used to load all vehicle data
    const loadVehicleData = async () => {
        //getting and storing vehicle detail by id in variable
        const response = await getallVehicles(id);
        //assigning vehicle details to vehicle by using setVehicle
        setVehicle(response.data);
    }

    //declering history as useHistory
    const history = useHistory();

    //onvalue change method
    const onValueChange = (e) => {

        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        console.log(vehicle);
    }

    // used updating vehicle details
    const editVehicleDetails = async () => {
        //updating vehicle details by giving id and vehicle are parameters
        await editVehicle(id, vehicle);
        //notifies updated successfully
        notify("Updated Successfully")
        //used to navigate another page by using history.push()
        history.push('/allvehicles');
    }

    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Update Vehicle Details</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>VehicleName</InputLabel>
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
                            <InputLabel>Enter Pickup Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="pickup" value={pickup} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Dropping Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="dropping" value={dropping} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>tEnter Distance</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="distance" value={distance} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Update Date</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Update Time</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Price</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button will help us to call ReplyMessage */}
                            <Button variant="contained" onClick={() => editVehicleDetails()} color="primary" align="center">Update Vehicle</Button>
                            <Button onClick={() => history.push("/allvehicles")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default UpdateVehicle;