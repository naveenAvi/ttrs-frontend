import {  TrainsListConstants } from "../Constan"

export const set_trains_list = ( trainsList ) =>{
    return {
        type: TrainsListConstants.SET_TRAIN_LIST,
        payload: {
            trainsList 
        }
    }
}


export const add_a_Train = ( trainData ) =>{
    return {
        type: TrainsListConstants.ADD_A_TRAIN,
        payload: {
            trainData 
        }
    }
}

