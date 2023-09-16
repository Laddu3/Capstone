import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getallVehicles, deleteVehicle } from '../../service/vehicleapi';
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
        margin: '50px 10px 200px 30px',

    },
    thead: {
        '& > *': {
            background: 'green',
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

//displays all vehicles
const AllVehicles = () => {

    const classes = useStyle();

    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        //cllaing getVehicle method
        getVehicle();
    }, [])

    //getting vehicle
    const getVehicle = async () => {
        //getting and storing all vehicles in response variable
        const response = await getallVehicles();
        //displaying all vehicle deatils in console
        console.log(response);
        //assigning vehicle details to vehicle by using setVehicle 
        setVehicle(response.data);
    }

    //method to delete vehicle details
    const deleteVehicles = async (id) => {
        await deleteVehicle(id);//delete vehicle details from vehicle table
        //calling getVehicle function
        getVehicle();
    }

    return (
        <div className='bgaddveh' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>VehicleName</TableCell>
                        <TableCell>VehicleType</TableCell>
                        <TableCell>Pickup</TableCell>
                        <TableCell>Dropping</TableCell>
                        <TableCell>Distance</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>StartTime</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        //displaying vehicle details for particular owner
                        vehicle.map((data) => {
                            //checking condition for display particular owner vehicle details
                            if (data.ownerName === localStorage.getItem('OName')) {
                                return (
                                    <TableRow className={classes.trow} key={data.vehicleId}>
                                        <TableCell>{data.vehicleName}</TableCell>
                                        <TableCell>{data.vehicleType}</TableCell>
                                        <TableCell>{data.pickup}</TableCell>
                                        <TableCell>{data.dropping}</TableCell>
                                        <TableCell>{data.distance}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell><p className='price'>{data.price}</p></TableCell>
                                        <TableCell>
                                            {/* this button is used to update vehicle details */}
                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/update/${data.vehicleId}`}>Update</Button>
                                            {/* this button is used to delete vehicle in vehicle table by calling deleteVehicle() */}
                                            <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteVehicles(data.vehicleId)}>Delete</Button>
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
//exporting Allvehicles
export default AllVehicles;
