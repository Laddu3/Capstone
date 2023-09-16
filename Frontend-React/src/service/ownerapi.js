import axios from 'axios';


//owner API
const addowner="http://localhost:8081/insert"
const allowner="http://localhost:8081/owner/owners"

//WaitingApprove API
const approveinsert="http://localhost:8081/approve/insert"
const approvevehicles="http://localhost:8081/approve/vehicles"
const approvedelete="http://localhost:8081/approve/delete";

//Owner Messages API
const addmsg="http://localhost:8081/omessage/insert"
const allmsg="http://localhost:8081/omessage/messages"

//----------------------------------------------------------------------------------
//getting all owners from url
export const getallOwner = async (id) => {
    id = id || '';
    return await axios.get(`${allowner}/${id}`);
}
//adding owner in that url
export const addOwner = async (owner) => {
    return await axios.post(addowner,owner);
}


//---------------------------------------------------------------------------
//adding vehicle to approvedvehicle in that url
export const addApprove = async (approve) => {
    return await axios.post(approveinsert,approve);
}
//getting all waitingvehicle  from url
export const getallWaitingApprove = async (id) => {
    id = id || '';
    return await axios.get(`${approvevehicles}/${id}`);
}
//deleting waitingvehicle using url
export const deleteWaitingVehicle = async (id) => {
    return await axios.delete(`${approvedelete}/${id}`);
}

//-----------------------------------------------------------------------------------
//adding Owner msg in that url
export const addOwnerMsg = async (msg) => {
    return await axios.post(addmsg,msg);
}
//getting all owner messages from url
export const getallOwnermsgs = async (id) => {
    id = id || '';
    return await axios.get(`${allmsg}/${id}`);
}