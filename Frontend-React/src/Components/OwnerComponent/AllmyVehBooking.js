import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles } from '@material-ui/core';
import '../../App.css'
import { getallBookings } from '../../service/userapi';
const myComponent = {
    width: '1300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    top: '150px',
    left: '0px'
};
const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
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

//displays all owner vehicle Bookings
const AllmyVehBooking = () => {

    const classes = useStyle();

    //fetching OwnerName from localStorage
    const Oname = localStorage.getItem('OName');

    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        //calling getVehicle()
        getVehicle();
    }, [])

    //getting vehicle bookings
    const getVehicle = async () => {
        //getting and storing all vehicle booking details in response
        const response = await getallBookings();
        //displaying all vehbooking details in console
        console.log(response);
        //assigning vehicle booking details to vehicle by using setVehicle 
        setVehicle(response.data);
    }



    return (
        <div className='bgaddveh' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Username</TableCell>
                        <TableCell>VehicleName</TableCell>
                        <TableCell>VehicleType</TableCell>
                        <TableCell>Pickup</TableCell>
                        <TableCell>Dropping</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>StartTime</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        //displaying vehicle booking details for particular owner
                        vehicle.map((data) => {
                            //checking condition for display particular owner vehicle booking details
                            if (data.ownerName === Oname) {
                                return (
                                    <TableRow className={classes.trow} key={data.vehicleId}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.vehicleName}</TableCell>
                                        <TableCell>{data.vehicleType}</TableCell>
                                        <TableCell>{data.pickup}</TableCell>
                                        <TableCell>{data.dropping}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>
                                            <b>Booked</b>
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
//exporting AllmyVehBooking
export default AllmyVehBooking;
