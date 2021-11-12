import { combineReducers } from 'redux';
import { ownerReducer } from "./owners/ownerReducer";
import { plotsReducer } from "./plots/plotsReducer";

export const rootReducer = combineReducers({
    plots: plotsReducer,
    allTypePlots: plotsReducer,
    allOwners: plotsReducer,
    owners: ownerReducer,
    typeowners: ownerReducer
});