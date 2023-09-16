import React, { useEffect, useState } from 'react';

import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { deleteWaitingVehicle } from '../../service/ownerapi';
import { getallWaitingApprove } from '../../service/ownerapi'
import { addBooking } from '../../service/userapi';
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

}


//Adding vehicle to approve conformation from owner
const ApproveConfirm = () => {

    const [vehicle, setVehicle] = useState(initialValue);
    const { vehicleName, vehicleType, price, dropping, distance, pickup, date, time, userName } = vehicle;
    //getting id from OwnerApproveVehicle method by using useParam() 
    const { id } = useParams();
    useEffect(() => {

        //loading approve needed vehicle 
        loadVehicleData();

        // eslint-disable-next-line

    }, []);

    //load Vehicle data
    const loadVehicleData = async () => {

        //getting and storing waitingapprovevehicle details 
        const response = await getallWaitingApprove(id);
        //assigning waitingapprovevehicle details to vehicle by using setVehicle 
        setVehicle(response.data);
    }
    //useHistory
    const history = useHistory();
    //onvaluechange method 
    const onValueChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        // displaying waitingapprovevehicle details in console
        console.log(vehicle);
    }
    //used to Approved the booking vehicle
    const ApproveBooking = async () => {
        //adding that waitingapprovevehicle details to booking table
        addBooking(vehicle);
        //deleting waitingapprovevehicle details from waitingApprove table using id
        deleteWaitingVehicle(id);
        //notifies Approved Successfully
        notify('Approved Successfully !!!!!!!')
        //navigating to anothor page using history.push method
        history.push("/myvehbookings")

    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Vehicle Approve Conformation</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>User Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Vehicle Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="vehicleName" value={vehicleName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Vehicle Type(2 or 4 wheeler)</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="vehicleType" value={vehicleType} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Staring Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="pickup" value={pickup} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Dropping Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="dropping" value={dropping} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Distance</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="distance" value={distance} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Price</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Date of Ride</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Time of Ride</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>

                        <Box my={3}>

                            {/* calling ApproveBooking() when button is clicked */}
                            <Button variant="text" onClick={() => ApproveBooking()} color="primary" align="center">Confirm Booking</Button>
                            <Button onClick={() => history.push("/bookingapprove")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}
//exporting ApproveConfirm
export default ApproveConfirm;