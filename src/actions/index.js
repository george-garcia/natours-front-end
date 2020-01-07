import { tours } from '../apis/tours';
import { login } from "../apis/tours";

export const fetchAllTours = () => {
    return async (dispatch) => {
        const response = await tours.get('/');

        dispatch({ type: 'FETCH_ALL_TOURS', payload: response.data })
    }
};

export const fetchTour = (id) => {
    return async (dispatch) => {
        const response = await tours.get(`/${id}`);

        dispatch({ type: 'FETCH_TOUR', payload: response.data })
    }
};

export const createTour = (data) => {
    return async (dispatch, getState) => {
        const response = await tours.post('/', {...data});

        dispatch({ type: 'CREATE_TOUR', payload: response.data });
    }
};

export const editDefect = (id, data) => {
    return async (dispatch) => {
        const response = await tours.patch(`/${id}`, data);

        dispatch({ type: 'EDIT_TOUR', payload: response.data });
    }
};

export const deleteDefect = (id) => {
    return async (dispatch) => {
        const response = await tours.delete(`/${id}`);

        dispatch({ type: 'DELETE_DEFECT', payload: id })
    }
};

export const userLogin = (email, password) => {
    return async (dispatch) => {
        const response = await login.post('/', {"email": email, "password": password});

        dispatch({ type: 'LOGIN', payload: response.data })
    }
};