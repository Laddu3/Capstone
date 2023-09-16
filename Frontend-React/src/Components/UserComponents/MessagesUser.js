import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallOwnermsgs } from '../../service/ownerapi';
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

//displays all owner messages 
const MessagesUser = () => {

    const classes = useStyle();

    const [message, setMessage] = useState([]);
    useEffect(() => {
        //calling getMessages
        getMessages();
    }, [])

    //getting all userMessages
    const getMessages = async () => {
        //getting and storing all messages to variable
        const response = await getallOwnermsgs();
        //displaying all messages in console
        console.log(response);
        //assigning that owner meesages to messages by using setMessages
        setMessage(response.data);
    }

    return (

        <div className='bgaddveh' style={myComponent}>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>

                        <TableCell>OwnerName</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        //displays messages of particular user
                        message.map((data) => {
                            //checking user
                            if (data.userName === localStorage.getItem('UName')) {
                                return (
                                    <TableRow className={classes.trow} key={data.msgId}>
                                        <TableCell>{data.ownerName}</TableCell>
                                        <TableCell>{data.message}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/ureply/${data.msgId}`}>Reply</Button>
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

export default MessagesUser;
