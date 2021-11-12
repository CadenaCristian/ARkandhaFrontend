import { fetchGetOwners } from '../../helpers/fetch/fetch';
import { types } from '../../types/owners/ownerTypes';
import Swal from 'sweetalert2';

//Lista de cartas creadas
export const listOwners = () => {
    return async (dispatch) => {
        const endpoint = `owners/list`
        const resp = await fetchGetOwners(endpoint, 'GET');
        const body = await resp.json();
        try {
            dispatch({ type: types.OWNERS, payload: body })
        } catch (e) {
        }
    }
}
//Lista de propietarios
export const listTypeOwner = () => {
    return async (dispatch) => {
        const endpoint = `owners/listTypeOwner`
        const resp = await fetchGetOwners(endpoint, 'GET');
        const body = await resp.json();
        try {
            dispatch({ type: types.TYPEOWNES, payload: body })
        } catch (e) {
        }
    }
}

//Inserta un nuevo propietario
export const insertOwner = (data) => {
    return async (dispatch) => {
        const endpoint = `owners/insert`
        const resp = await fetchGetOwners(endpoint, 'POST', data);
        const body = await resp.json();
        try {
            if (body.error === false) {
                Swal.fire(`${body.message}`, '', 'success');
            } else if (body.error === true) {
                Swal.fire(`${body.message}`, '', 'danger');
            }
            dispatch({ type: types.INSERTOWNER, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}
//Actualiza un propietario
export const updateOwner = (data) => {
    console.log("updateOwner: ", data)
    return async (dispatch) => {
        const endpoint = `owners/update`
        const resp = await fetchGetOwners(endpoint, 'PUT', data);
        const body = await resp.json();
        try {
            console.log("body: ", body)
            // Swal.fire(`${body.Message}`, '', 'success');
            dispatch({ type: types.UPDATEOWNER, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}
//Elimina un propietario
export const deleteOwner = (data) => {
    return async (dispatch) => {
        const endpoint = `owners/delete`
        const resp = await fetchGetOwners(endpoint, 'DELETE', data);
        const body = await resp.json();
        try {
            console.log("body: ", body)
            // Swal.fire(`${body.Message}`, '', 'success');
            dispatch({ type: types.INSERTOWNER, payload: body })
        } catch (e) {
            console.log(e);
        }
    }
}
//Detalles
export const detailForOwner = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.DETAILSOWNER, payload: id })
        } catch (e) {
            console.log(e);
        }
    }
}