import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { getallWaitingApprove, deleteWaitingVehicle } from '../../service/ownerapi'
import '../../App.css'
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

//displays all waiting vehicles
const AllWaitingVehicles = () => {

    const classes = useStyle();
    //getting userName by using local storage
    const Uname = localStorage.getItem('UName');
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        //calling getVehicle()
        getVehicle();
    }, [])

    //getting waiting vehicles
    const getVehicle = async () => {
        //getting and storing waitingvehicles in variable
        const response = await getallWaitingApprove();
        //displaying all waiting vehicles in console
        console.log(response);
        //assigning all waiting vehicle to vehicle by using setVehicle
        setVehicle(response.data);
    }

    //deleting waiting vehicles
    const deleteWaitingVehicles = async (id) => {
        await deleteWaitingVehicle(id);//delete from waiting vehicles
        //calling getvehicle()
        getVehicle();
    }

    return (

        <div className='bgaddveh' style={myComponent}>

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
                        vehicle.map((data) => {
                            if (data.userName === Uname) {
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
                                            Waiting for Owner Approval<br />
                                            {/* this button is used to call deleteWaitingVehicles() */}
                                            <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteWaitingVehicles(data.vehicleId)}>Cancel</Button>
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
//exporting AllWaitingVehicles
export default AllWaitingVehicles;
