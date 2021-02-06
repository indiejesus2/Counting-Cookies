export default function recordsReducer(state = {records: [], loading: false}, action) {
    switch(action.type) {
        
        case 'LOADING_RECORDS':
            return {
                records: [...state.records],
                loading: true
            }
        case 'FETCH_RECORDS':
            return {records: action.payload.data,
                loading: false
            }
        default:
            return state
    }
}