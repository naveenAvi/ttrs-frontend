import { TrainsListConstants } from "../Constan"


const initialState = []
const TrainsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TrainsListConstants.SET_TRAIN_LIST:
            return payload.trainsList;
        case TrainsListConstants.ADD_A_TRAIN:
            var clon = JSON.parse(JSON.stringify(state))
            clon.push(payload.trainData)
            return clon
        default:
            return state
    }
}

export default TrainsReducer