import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../../App.css'


const useStyles = makeStyles({
    header: {
        backgroundColor: "tomato",
        // backgroundImage: "/loc.jpeg"
    },

    spacing: {
        paddingLeft: 70,
        fontSize: '18px',
        textDecoration: 'none',
        color: 'white',


    }
});
//used to create navigation bar
const Navbar = () => {
    const classes = useStyles();
    //returning main navigation bar
    return (
        
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="#" className={classes.spacing}> <h3>Share Ride</h3></NavLink>
                <NavLink to="/owner" className={classes.spacing}><b>Owner</b></NavLink>
                <NavLink to="/user" className={classes.spacing}><b>User</b></NavLink>
                
                


            </Toolbar>
        </AppBar>
    )
}
//exporting Navbar
export default Navbar;