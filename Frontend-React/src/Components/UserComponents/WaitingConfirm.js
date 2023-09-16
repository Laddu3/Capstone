import React, { useEffect, useState } from 'react';

import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getallVehicles } from '../../service/vehicleapi';


import { useHistory, useParams } from 'react-router-dom';
import { addApprove } from '../../service/ownerapi';
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


//used to confirm the booking vehicle details
const WaitingConfirm = () => {

    const [vehicle, setVehicle] = useState(initialValue);
    const { vehicleName, vehicleType, price, dropping, distance, pickup, date, time } = vehicle;
    //getting id as a parameter using userParam()
    const { id } = useParams();

    useEffect(() => {

        //calling loadVehicleData()
        loadVehicleData();
    }, []);

    //used oading Vehicle data
    const loadVehicleData = async () => {

        //used to getallvehicles in table and storing that data in variable
        const response = await getallVehicles(id);

        //assiging that vehicle data to vehicle by using setVehicle()
        setVehicle(response.data);


    }
    //useHistory
    const history = useHistory();
    const onValueChange = (e) => {
        setVehicle({ ...vehicle, [e.target.name]: e.target.value });
        console.log(vehicle);
    }
    //used place Booking
    const PlaceBook = async () => {
        const book = {
            userName: localStorage.getItem('UName'),
            vehicleName: vehicle.vehicleName,
            vehicleType: vehicle.vehicleType,
            price: vehicle.price,
            dropping: vehicle.dropping,
            distance: vehicle.distance,
            pickup: vehicle.pickup,
            date: vehicle.date,
            time: vehicle.time,
            ownerName: vehicle.ownerName

        }
        await addApprove(book);//inserting vehicle details to waiting vehicle details table
        notify('Vehicle Booked Successfully !  Waiting for Owner Approval..')//notifies vehicle booked
        history.push("/waitingapprove")//navigating to another page using history.push()

    }
    return (

        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">

                <Box my={5}>

                    <Typography variant="h5" align="center">vehicle Booking Conformation</Typography>

                    <FormGroup>

                        <FormControl>
                            <InputLabel>Vehicle Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="vehicleName" value={vehicleName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Vehicle Type(2 or 4 wheeler)</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="vehicleType" value={vehicleType} />


                        </FormControl>
                        <FormControl>
                            <InputLabel>PickUp Location</InputLabel>
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
                            {/* this button is used to call PlaceBook() */}
                            <Button variant="text" onClick={() => PlaceBook()} color="primary" align="center">Confirm Booking</Button>

                            <Button onClick={() => history.push("/ride")} variant="text" color="secondary" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )

}
//exporting WaitingConfirm
export default WaitingConfirm;