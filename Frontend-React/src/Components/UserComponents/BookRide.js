import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles } from '@material-ui/core';
import { getallVehicles, getallVehiclesSort } from '../../service/vehicleapi';
import { Link } from 'react-router-dom';
import '../../App.css'
const useStyle = makeStyles({
    table: {
        width: '100%',

    },
    thead: {
        '& > *': {
            background: 'blue',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})
const myComponent = {
    width: '1100px',
    height: '450px',
    overflowY: 'scroll',
    overflowX: 'scroll',

};
const initialValue = {

    vehicleType: "",
    dropping: "",
    pickup: "",
    date: "",

}

//used to book the ride 
const BookRide = () => {

    const [ride, setRide] = useState(initialValue);


    const classes = useStyle();

    const [vehicle, setVehicle] = useState([]);

    //getting vehicles
    const getVehicle = async () => {
        //getting and storing all avilable vehicles
        const response = await getallVehicles();
        //diplaying all available vehicles in console
        console.log(response);
        //assigning that available vehicle to vehicles using setVehicle()
        setVehicle(response.data);
    }
    //used to dipslay vehicles in ASC order of price
    const SortedVehicles = async () => {
        //getting and storing all Sorted vehicles
        const response = await getallVehiclesSort();
        //diplaying all Sorted vehicles in console
        console.log(response);
         //assigning that Sorted vehicle to vehicles using setVehicle()
        setVehicle(response.data);
    }
    //onvaluechange ()
    const onValueChange = (e) => {
        setRide({ ...ride, [e.target.name]: e.target.value });
        console.log(ride);
    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Book Ride</Typography>
                    <FormGroup>

                        <FormControl>
                            <InputLabel>Enter Date</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={ride.date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter PickUp Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="pickup" value={ride.pickup} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Enter Dropping Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="dropping" value={ride.dropping} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Select Vehicle Type</InputLabel>
                            <Select value={ride.vehicleType} onChange={(e) => onValueChange(e)} name="vehicleType">
                                <MenuItem value={"2 wheeler"}>2 wheeler</MenuItem>
                                <MenuItem value={"4 wheeler"}>4 wheeler</MenuItem>

                            </Select>
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call getVehicle() */}
                            <Button variant="contained" onClick={() => getVehicle()} color="primary" align="center">Search Vehicle</Button>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
            <div className='sort'>
            {/* this button is used to call SortedVehicles() */}
            <Button variant="contained" onClick={() => SortedVehicles()} color="secondary" align="center" className='sort'>Price Low to High</Button>
            </div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>VehicleName</TableCell>
                        <TableCell>VehicleType</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Pickup</TableCell>
                        <TableCell>Dropping</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>StartTime</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        //displaying all available vehicles or sorted vehicles
                        vehicle.map((data) => {
                            //searching vehicle details in vehicle table
                            if (data.pickup === ride.pickup && data.dropping === ride.dropping && data.date === ride.date && data.vehicleType === ride.vehicleType) {
                                return (
                                    <TableRow className={classes.trow} key={data.vehicleId}>
                                        <TableCell>{data.vehicleName}</TableCell>
                                        <TableCell>{data.vehicleType}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>{data.pickup}</TableCell>
                                        <TableCell>{data.dropping}</TableCell>
                                        <TableCell>{data.distance}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/confirm/${data.vehicleId}`}>Book Vehicle</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
//exporting BookRide
export default BookRide;