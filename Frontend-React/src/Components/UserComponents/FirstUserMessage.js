import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMsg, getallBookings } from '../../service/userapi';
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
//used send the first msg to Owner
const FirstUserMessage = () => {

    const [messages, setMessages] = useState(initialValue);
    const { ownerName, message } = messages;

    //taking id as a parameter using useParam()
    const { id } = useParams();

    useEffect(() => {
        //calling loadMesData()
        loadMesData();
    }, []);

    //used to load owner name in the form
    const loadMesData = async () => {
        //getting and storing  owner name in variable
        const response = await getallBookings(id);
        //assigning that owner name 
        setMessages(response.data);
    }

    const history = useHistory();

    //onvalue change method
    const onValueChange = (e) => {

        setMessages({ ...messages, [e.target.name]: e.target.value });
        console.log(messages);
    }

    //updating vehicle details
    const sendMsg = async () => {
        const usermessage = {
            ownerName: messages.ownerName,
            userName: messages.userName,
            message: messages.message

        }
        await addMsg(usermessage);//sending user msg to owner
        notify("Message Sent Successfully")//notifies Message sent successfully
        history.push('/booking');//used to navigate to another page by using history.push()
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
                            <Input onChange={(e) => onValueChange(e)} name="message" value={message} />
                        </FormControl>
                        <Box my={3}>
                            {/* this button is used to call sendMsg() */}
                            <Button variant="contained" onClick={() => sendMsg()} color="primary" align="center">Send Message</Button>
                            <Button onClick={() => history.push("/booking")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}
//exporting FirstUserMessage
export default FirstUserMessage;