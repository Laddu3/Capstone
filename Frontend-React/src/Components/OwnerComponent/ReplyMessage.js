import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getallUserMsgs } from '../../service/userapi';
import { addOwnerMsg } from '../../service/ownerapi';
toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const myComponent = {
    width: '1000px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll'
};
const initialValue = {
    ownerName: "",
    message: "",
}
//used to give reply to user messages
const ReplyMessage = () => {

    const [messages, setMessages] = useState(initialValue);
    const { userName, omessage } = messages;

    //taking id from useParam
    const { id } = useParams();

    useEffect(() => {
        //calling loadMsgData()
        loadMsgData();
    }, []);

    //getting all usermessages
    const loadMsgData = async () => {
        //getting and storing all user msgs in variable
        const response = await getallUserMsgs(id);
        //assigning that usermessage to messages using setMessages
        setMessages(response.data);
    }
    //declaring history as useHistory
    const history = useHistory();

    //onvalue change method
    const onValueChange = (e) => {

        setMessages({ ...messages, [e.target.name]: e.target.value });
        console.log(messages);
    }

    //used to send Messages
    const sendMsg = async () => {
        const ownermessage = {
            ownerName: messages.ownerName,
            userName: messages.userName,
            message: messages.omessage,

        }
        //adding that message to owner message
        await addOwnerMsg(ownermessage);
        //notifies message sent successfully
        notify("Message Sent Successfully")
        //used to navigate another page using history.push
        history.push('/ownermessages');
    }
    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Give Reply to User</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>UserName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type Message</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="omessage" value={omessage} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call sendMsg() */}
                            <Button variant="contained" onClick={() => sendMsg()} color="primary" align="center">Send Reply</Button>
                            <Button onClick={() => history.push("/ownermessages")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

//exporting ReplyMessage
export default ReplyMessage;