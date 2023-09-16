import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallUserMsgs } from '../../service/userapi';
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
        margin: '50px 10px 200px 80px',

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

//used to display all messages from user
const MessagesOwner = () => {

    const classes = useStyle();

    const [message, setMessage] = useState([]);
    useEffect(() => {
        //calling getMessages()
        getMessages();
    }, [])

    //getting all messages
    const getMessages = async () => {
        //getting and storing allMesaages in variable
        const response = await getallUserMsgs();
        //displaying all messages in console
        console.log(response);
        //assigning messages to messages by using setMessage 
        setMessage(response.data);
    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>UserName</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        message.map((data) => {
                            if (data.ownerName === localStorage.getItem('OName')) {
                                return (
                                    <TableRow className={classes.trow} key={data.msgId}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.message}</TableCell>
                                        <TableCell>
                                            {/* this button is used to give reply message to user */}
                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/oreply/${data.msgId}`}>Reply</Button>
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
//exporting MessageOwner
export default MessagesOwner;
