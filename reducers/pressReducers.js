import { HISTORY_ADD_ITEM } from "../constants/PressConstants";

const initialState = [];

const addToHistoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case HISTORY_ADD_ITEM:
            return [...state, action.payload,]
        default:
            return state;
    }
};

export default addToHistoryReducer;
