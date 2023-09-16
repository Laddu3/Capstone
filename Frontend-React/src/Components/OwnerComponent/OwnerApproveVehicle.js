import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { getallWaitingApprove } from '../../service/ownerapi'
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
            background: 'Green',
            color: '#7CFC00',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

//displays all vehicle bookigs need his approval
const OwnerApproveVehicle = () => {

    //getting Ownername form localstorage
    const Oname = localStorage.getItem('OName');
    const classes = useStyle();
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        //calling getVehicle()
        getVehicle();
    }, [])

    //getting all vehicle bookigs need his approval
    const getVehicle = async () => {
        //getting and storing that vehicles to variable
        const response = await getallWaitingApprove();
        //displaying all vehicle bookigs need his approval in console
        console.log(response);
        //assiging that all vehicles to vehicle using setVehicle
        setVehicle(response.data);
    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>UserName</TableCell>
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
                        //displaying pending vehicle booking details for particular owner
                        vehicle.map((data) => {
                            //checking condition for display particular owner pending vehicle booking details
                            if (data.ownerName === Oname) {
                                return (<TableRow className={classes.trow} key={data.vehicleId}>
                                    <TableCell>{data.userName}</TableCell>
                                    <TableCell>{data.vehicleName}</TableCell>
                                    <TableCell>{data.vehicleType}</TableCell>
                                    <TableCell>{data.price}</TableCell>
                                    <TableCell>{data.pickup}</TableCell>
                                    <TableCell>{data.dropping}</TableCell>
                                    <TableCell>{data.distance}</TableCell>
                                    <TableCell>{data.date}</TableCell>
                                    <TableCell>{data.time}</TableCell>
                                    <TableCell>
                                        Waiting for your Approval<br />
                                        {/* this button is used to Approve the pending vehicle booking  */}
                                        <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/approved/${data.vehicleId}`}>Approve</Button>
                                    </TableCell>
                                </TableRow>)
                            }
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
//exporting OwnerApproveVehicle
export default OwnerApproveVehicle;
