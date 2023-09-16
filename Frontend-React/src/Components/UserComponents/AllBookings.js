import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallBookings } from '../../service/userapi';
const myComponent = {
    width: '1280px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top: '150px',
    left: '0px'

};
const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '30px 0px 0px 20px',
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

//displays all user Bookings
const AllBookings = () => {

    const classes = useStyle();

    //getting userName by using local storage
    const Uname = localStorage.getItem('UName');
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        //calling getBooking()
        getBooking();
    }, [])

    //getting all bookings of user
    const getBooking = async () => {
        //getting and storing all booking details in variable
        const response = await getallBookings();
        //displaying all booking deatils in console
        console.log(response);
        //assiging all bookings to booking by using setBooking
        setBooking(response.data);
    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>OwnerName</TableCell>
                        <TableCell>VehicleName</TableCell>
                        <TableCell>VehicleType</TableCell>
                        <TableCell>Pickup</TableCell>
                        <TableCell>Dropping</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>StartTime</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Help</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {//displaying all bookings of a particuler user
                        booking.map((data) => {
                            //chekcing user
                            if (data.userName === Uname) {
                                return (
                                    <TableRow className={classes.trow} key={data.vehicleId}>
                                        <TableCell>{data.ownerName}</TableCell>
                                        <TableCell>{data.vehicleName}</TableCell>
                                        <TableCell>{data.vehicleType}</TableCell>
                                        <TableCell>{data.pickup}</TableCell>
                                        <TableCell>{data.dropping}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell><p className='price'>{data.price}</p></TableCell>
                                        <TableCell>
                                            Booked
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/message/${data.vehicleId}`}>SendMessage</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        }
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllBookings;
