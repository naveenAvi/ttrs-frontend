import axios from 'axios'

/* admin section*/
export const getStationList = (selectedtrack) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/get-station-list', {selectedtrack})  
}

export const addAStation = (formvals, track) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/add-a-station',{ formvals, track })  
}

export const getTrainsList = () => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/get-trains-list',)  
}

export const addATrain = (values) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/add-train', {values})  
}

export const getScheduleList = (values) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/get-train-schedules', {values})  
}
export const addTrainSchedule = (values) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/add-train-schedules', {values})  
}






















/*user requets*/
export const checktrainavailability = (reservationdetails) => {
    /*should send the current tab selected*/
    return  axios.post('http://127.0.0.1:8000/check-train-availability', {reservationdetails})  
}
