import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMsg } from '../../service/userapi';
import { getallOwnermsgs } from '../../service/ownerapi';
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
//used to give reply to owner messages
const UserReplyMessage = () => {

    const [messages, setMessages] = useState(initialValue);
    const { ownerName, umessage } = messages;

    //getting id as a parameter using useParam()
    const { id } = useParams();

    useEffect(() => {
        //calling loadMsgData()
        loadMsgData();
    }, []);
    //used to load all messages
    const loadMsgData = async () => {
        //getting and storing messages in variable
        const response = await getallOwnermsgs(id);
        //assigning that usermessages to messages by using setMessages()
        setMessages(response.data);
    }

    const history = useHistory();

    //onvalue change method
    const onValueChange = (e) => {

        setMessages({ ...messages, [e.target.name]: e.target.value });
        console.log(messages);
    }

    //used to send Messages
    const sendMsg = async () => {
        const usermessage = {
            ownerName: messages.ownerName,
            userName: messages.userName,
            message: messages.umessage

        }
        await addMsg(usermessage);//sending messages
        notify("Message Sent Successfully")//notifies Message sent successfully
        history.push('/usermessages');//navigate to anothet page using history.push()
    }

    return (
        <div className='bgaddveh' style={myComponent}>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Give Reply to Owner</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>OwnerName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="ownerName" value={ownerName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type Message</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="umessage" value={umessage} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call sendMsg() */}
                            <Button variant="contained" onClick={() => sendMsg()} color="primary" align="center">Send Reply</Button>
                            <Button onClick={() => history.push("/usermessages")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

//exporting UserReplyMessage
export default UserReplyMessage;