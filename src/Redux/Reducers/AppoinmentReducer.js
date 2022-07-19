import { Appoinments } from "../Constan"


const initialState = []
const AppoinmentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Appoinments.SET_APPIONEMT_LIST:
            return payload.appoinmentlist;
        case Appoinments.ADD_APPOINMENT:
            let jj = JSON.parse(JSON.stringify(state))
            jj.push(payload.appoinmentdata)
            return jj;
        case Appoinments.UPDATE_APPOINMENT:
            let jjh = JSON.parse(JSON.stringify(state))
            let isupdated = jjh.findIndex(obj => obj.id === payload.appoinmentdata.id)
            console.log( isupdated )
            if( isupdated >= 0 ){
                jjh[isupdated] = payload.appoinmentdata
            }
            return jjh;
        default:
            return state
    }
}

export default AppoinmentReducer