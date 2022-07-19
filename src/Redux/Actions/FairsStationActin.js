import { FairsConstants } from "../Constan"

export const set_station_list = ( stationList ) =>{
    return {
        type: FairsConstants.SET_STATIONS_LIST,
        payload: {
            stationList 
        }
    }
}

export const add_new_station = ( stationformdata, track ) =>{
    return {
        type: FairsConstants.ADD_NEW_STATION,
        payload: {
            stationformdata,
            track
        }
    }
}

export const add_new_station_OBJ = ( stationformdata ) =>{
    return {
        type: FairsConstants.ADD_NEW_STATION_OBJ,
        payload: {
            stationformdata
        }
    }
}