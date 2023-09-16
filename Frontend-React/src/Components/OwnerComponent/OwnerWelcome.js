import React from 'react';
import { AppBar, makeStyles, Toolbar, Badge } from '@material-ui/core';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LogoutIcon from '@mui/icons-material/Logout';
import '../../App.css'


const useStyles = makeStyles({

    header: {
        backgroundColor: "Green",
    },
    spacing: {
        paddingLeft: 30,
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    },
    logout: {
        paddingLeft: 100,
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    }
});

//used to dipalay Owner navbar 
const OwnerWelcome = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >

                <NavLink to="/profile" className={classes.spacing}><em><AccountCircleIcon />Profile</em></NavLink>
                <NavLink to="/addvehicle" className={classes.spacing}><em><ControlPointIcon></ControlPointIcon>AddVehicle</em></NavLink>
                <NavLink to="/bookingapprove" className={classes.spacing}><em><PendingActionsOutlinedIcon></PendingActionsOutlinedIcon>PendingApprovals</em></NavLink>
                <NavLink to="/myvehbookings" className={classes.spacing}><em><PendingActionsOutlinedIcon></PendingActionsOutlinedIcon>MyVehicleBookings</em></NavLink>
                <NavLink to="/allvehicles" className={classes.spacing}><em><DirectionsCarIcon></DirectionsCarIcon>AllVehicles</em></NavLink>
                <NavLink to="/ownermessages" className={classes.spacing}><em><Badge color="primary">
                    <MailIcon color="colored" />
                </Badge>Messages</em></NavLink>
                <NavLink to="/logout" className={classes.logout}> <em><LogoutIcon></LogoutIcon>Logout</em></NavLink>

            </Toolbar>
        </AppBar>
    )
}
//exporting OwnerWelcome
export default OwnerWelcome;