import { HISTORY_ADD_ITEM } from "../constants/PressConstants";
import { v4 as uuidv4 } from 'uuid';

// export const addToHistory = (item) => async (dispatch, getState) => {
//     dispatch({
//         type: HISTORY_ADD_ITEM,
//         payload: item,
//     });
// };

export function addToHistory(item) {
    return {
      type: HISTORY_ADD_ITEM,
      id: uuidv4(),
      item
    }
};