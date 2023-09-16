import React from 'react';
import { AppBar, makeStyles, Toolbar,Badge } from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import '../../App.css';
import GarageIcon from '@mui/icons-material/Garage';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import MailIcon from '@mui/icons-material/Mail';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({

    header: {
        backgroundColor:"Green",
    },
    spacing: {
        paddingLeft: 50,
        color: '#7CFC00',
        fontSize: '18px',
        textDecoration: 'none',
    },
    logout: {
        paddingLeft: 400,
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    }
});

//used to display user navigation 
const UserWelcome = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
            <NavLink to="/userprofile" className={classes.spacing}><em><AccountCircleIcon />Profile</em></NavLink>
                <NavLink to="/ride" className={classes.spacing}><em><GarageIcon></GarageIcon>BookRide</em></NavLink>
                
                <NavLink to="/waitingapprove" className={classes.spacing}><em><PendingActionsIcon></PendingActionsIcon>Pending</em></NavLink>
                <NavLink to="/booking" className={classes.spacing}><em><CarRentalIcon></CarRentalIcon>Bookings</em></NavLink>
                <NavLink to="/usermessages" className={classes.spacing}><em><Badge  color="primary">
                    <MailIcon color="colored" />
                </Badge>Messages</em></NavLink>
                <NavLink to="/ulogout" className={classes.logout}> <em><LogoutIcon></LogoutIcon>Logout</em></NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default UserWelcome;