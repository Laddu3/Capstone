import axios from 'axios';


const addvehicle="http://localhost:8081/vehicle/insert"
const allvehicles = "http://localhost:8081/vehicle/vehicles";
const deletevehicle = "http://localhost:8081/vehicle/delete";
const updatevehicle = "http://localhost:8081/vehicle/update";
const sort="http://localhost:8081/vehicle/sort"

//getting all vehicles from url
export const getallVehicles = async (id) => {
    id = id || '';
    return await axios.get(`${allvehicles}/${id}`);
}
//adding vehicle in that url
export const addVehicle = async (vehicle) => {
    return await axios.post(addvehicle,vehicle);
}

//editing vehicle details using url
export const editVehicle = async (id, vehicle) => {
    return await axios.put(`${updatevehicle}/${id}`,vehicle);
}

//deleting vehicle using url
export const deleteVehicle = async (id) => {
    return await axios.delete(`${deletevehicle}/${id}`);
}


//getting all vehicles in sort(price) in ASC from url
export const getallVehiclesSort = async (id) => {
    id = id || '';
    return await axios.get(`${sort}/${id}`);
}

