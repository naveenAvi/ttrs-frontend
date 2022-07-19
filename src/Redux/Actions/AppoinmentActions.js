import {  Appoinments  } from "../Constan"

export const set_appoinment_list = ( appoinmentlist ) =>{
    return {
        type: Appoinments.SET_APPIONEMT_LIST,
        payload: {
            appoinmentlist 
        }
    }
}

export const add_new_appoinment = ( appoinmentdata ) =>{
    return {
        type: Appoinments.ADD_APPOINMENT,
        payload: {
            appoinmentdata 
        }
    }
}

export const update_apppoinment = ( appoinmentdata ) =>{
    return {
        type: Appoinments.UPDATE_APPOINMENT,
        payload: {
            appoinmentdata 
        }
    }
}
