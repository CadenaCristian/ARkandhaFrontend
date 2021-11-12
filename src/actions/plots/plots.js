import { fetchGetPlots } from '../../helpers/fetch/fetch';
import { types } from '../../types/plots/plotsType'
import Swal from 'sweetalert2';

//List al plots
export const listPlots = () => {
    return async (dispatch) => {
        const endpoint = `adminplots/list`
        const resp = await fetchGetPlots(endpoint, 'GET');
        const body = await resp.json();
        try {
            console.log("body: ", body)
            dispatch({ type: types.PLOTS, payload: body })
        } catch (e) {
        }
    }
}
//List all type of plots
export const listAllTypePlots = () => {
    return async (dispatch) => {
        const endpoint = `adminplots/listAllPlotsType`
        const resp = await fetchGetPlots(endpoint, 'GET');
        const body = await resp.json();
        try {
            dispatch({ type: types.ALLTYPESPLOTS, payload: body })
        } catch (e) {
        }
    }
}
//List all owners
export const listAllOwners = () => {
    return async (dispatch) => {
        const endpoint = `adminplots/listOwners`
        const resp = await fetchGetPlots(endpoint, 'GET');
        const body = await resp.json();
        try {
            dispatch({ type: types.ALLOWNERS, payload: body })
        } catch (e) {
        }
    }
}

//Insert new plot
export const insertPlot = (data) => {
    return async (dispatch) => {
        const endpoint = `adminplots/insert`
        const resp = await fetchGetPlots(endpoint, 'POST', data);
        const body = await resp.json();
        try {
            console.log("oinsert: ", body)
            if (body.error === false) {
                Swal.fire(`${body.message}`, '', 'success');
            } else if (body.error === true) {
                Swal.fire(`${body.message}`, '', 'danger');
            }
            dispatch({ type: types.MESSAGERESPONSE, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}

//Delete plot
export const deletePlots = (data) => {
    return async (dispatch) => {
        const endpoint = `adminplots/delete`
        const resp = await fetchGetPlots(endpoint, 'DELETE', data);
        const body = await resp.json();
        try {
            // Swal.fire(`${body.Message}`, '', 'success');
            dispatch({ type: types.MESSAGERESPONSE, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}

//Detalles
export const detailForOwner = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.DETAILSPLOT, payload: id })
        } catch (e) {
            console.log(e);
        }
    }
}

//Get id plot
export const getIdPlot = (data) => {
    return async (dispatch) => {
        const endpoint = `adminplots/getPlotById/${data}`
        const resp = await fetchGetPlots(endpoint, 'GET');
        const body = await resp.json();
        try {
            // Swal.fire(`${body.Message}`, '', 'success');
            console.log("Este es el body id: ", body)
            dispatch({ type: types.IDPLOT, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}