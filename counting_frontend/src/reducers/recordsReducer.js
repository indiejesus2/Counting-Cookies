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
        case 'ADD_RECORD':
            let records = state.records.map(record => {
                if (record.id === action.payload.id) {
                    return action.payload.data
                } else {
                    return record
                }
            })
            return {...state, records: records}
        case 'EDIT_RECORD':
            let records = state.records.map(record => {
                if (record.id === action.payload.id) {
                    return action.payload.data
                } else {
                    return record
                }
            })
            return {...state, records: records}
        default:
            return state
    }
}