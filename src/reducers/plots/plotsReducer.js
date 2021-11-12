import { types } from '../../types/plots/plotsType';

const initialState = {
    plots: [],
    allTypePlots: [],
    allOwners: [],
    message: {},
    detailsplot: {},
    idplot: [],
}

export const plotsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.PLOTS:
            return {
                ...state,
                plots: action.payload,
            }
        case types.ALLTYPESPLOTS:
            return {
                ...state,
                allTypePlots: action.payload,
            }
        case types.ALLOWNERS:
            return {
                ...state,
                allOwners: action.payload,
            }
        case types.MESSAGERESPONSE:
            return {
                ...state,
                message: action.payload,
            }
        case types.DETAILSPLOT:
            return {
                ...state,
                detailsplot: action.payload,
            }
        case types.IDPLOT:
            return {
                ...state,
                idplot: action.payload,
            }
        default:
            return state
    }
}