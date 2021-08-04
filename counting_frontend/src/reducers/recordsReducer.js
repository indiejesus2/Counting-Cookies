export default function recordsReducer(state = {records: [], date: "", loading: false}, action) {
    switch(action.type) {
        
        case 'LOADING_RECORDS':
            return {
                records: [...state.records],
                loading: true
            }
        case 'FETCH_RECORDS':
            // debugger
            return {
                records: action.payload.data.map(dat => dat.attributes),
                loading: false
            }
        case 'ADD_RECORD':
            if (action.payload.error) {
                alert(action.payload.error)
                return state
            } else {
                return {
                    ...state, 
                    records: [...state.records, action.payload.data],
                    loading: false
                }
            }
        case 'EDIT_RECORD':
            let edited = state.records.map(record => {
                if(record.id === action.payload.data.id) {
                    return action.payload.data
                } else {
                    return record
                }
            })
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
        case 'SELECT_DATE':
            return {...state, date: action.payload}
        default:
            return state
    }
}