import axios from 'axios';

//User Api
const adduser = "http://localhost:8082/user/insert";

//Booking API
const addBookings="http://localhost:8082/booking/insert";
const allbookings="http://localhost:8082/booking/bookings";
//user message API
const addmsg="http://localhost:8082/umessage/insert";
const allmsg="http://localhost:8082/umessage/messages"


//adding user in that url
export const addUser = async (user) => {
    return await axios.post(adduser,user);
}
//----------------------------------------------------------------
//adding Booking in that url
export const addBooking = async (booking) => {
    return await axios.post(addBookings,booking);
}

//getting all Bookings from url
export const getallBookings = async (id) => {
    id = id || '';
    return await axios.get(`${allbookings}/${id}`);
}
//---------------------------------------------------------------------------------------
//adding usermessages in that url
export const addMsg = async (message) => {
    return await axios.post(addmsg,message);
}
//getting all user message from url
export const getallUserMsgs = async (id) => {
    id = id || '';
    return await axios.get(`${allmsg}/${id}`);
}