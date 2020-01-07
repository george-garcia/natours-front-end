import _ from 'lodash';

export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_ALL_TOURS': { return { ...state, ..._.mapKeys(action.payload.data.data, '_id') }}
        case 'FETCH_TOUR': { return { ...state, [action.payload.data.data._id]: action.payload.data.data }}
        case 'CREATE_TOUR': { return { ...state, [action.payload.data.data._id]: action.payload.data }}
        case 'EDIT_TOUR': {return { ...state, [action.payload.data.data._id]: action.payload.data }}
        case 'DELETE_DEFECT': return _.omit(state, action.payload.data);
        default: return state;
    }
}

// const newState = {...state};
// newState[action.payload.data.data._id] = action.payload.data;
// return newState;