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
            return {...state, records: [...state.records, action.payload.data]}
        case 'EDIT_RECORD':
            let edited = state.records.map(record => {
                if(record.id === action.payload.data.id) {
                    return action.payload.data
                } else {
                    return record
                }
            })
            debugger
            return {...state, records: edited}
        case 'DELETE_RECORD':
            return {...state, records: action.payload.data}
        case 'DELETE_ITEM':
            let deleted = state.records.map(record => {
                if(record.id === action.payload.data.id) {
                    return action.payload.data
                } else {
                    return record
                }
            })
            return {...state, records: deleted}
        default:
            return state
    }
}