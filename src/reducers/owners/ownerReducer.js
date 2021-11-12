import { types } from '../../types/owners/ownerTypes';

const initialState = {
    owners: [],
    insertowner: {},
    typeowners: [],
    detailsowner: {},
    updateowner: {}
}

export const ownerReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.OWNERS:
            return {
                ...state,
                owners: action.payload,
            }
        case types.TYPEOWNES:
            return {
                ...state,
                typeowners: action.payload,
            }
        case types.INSERTOWNER:
            return {
                ...state,
                insertowner: action.payload,
            }
        case types.DETAILSOWNER:
            return {
                ...state,
                detailsowner: action.payload,
            }
        case types.UPDATEOWNER:
            return {
                ...state,
                updateowner: action.payload,
            }
        default:
            return state
    }
}