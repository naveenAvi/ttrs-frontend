import { FairsConstants } from "../Constan";


const initialState = []
const FairsStationReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FairsConstants.SET_STATIONS_LIST:
            return payload.stationList;
        case FairsConstants.ADD_NEW_STATION:
            var clon = JSON.parse(JSON.stringify(state))

            clon.push({
                class1: payload.stationformdata.firstPrice,
                class2: payload.stationformdata.secondPrice,
                class3: payload.stationformdata.thirdPrice,
                distancem: payload.stationformdata.distance,
                minutesfromc: payload.stationformdata.timetaken,
                rank: 1,
                stationName: payload.stationformdata.stationName,
                track: "A"
            })
            return clon
            case FairsConstants.ADD_NEW_STATION_OBJ:
                var clont = JSON.parse(JSON.stringify(state))
    
                clont.push(payload.stationformdata)
                clont.sort((a, b) => (a.distancem > b.distancem) ? 1 : -1)
                return clont
        default:
            return state
    }
}

export default FairsStationReducer