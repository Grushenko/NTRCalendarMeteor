import moment from 'moment'

const initialState = {
    date: moment(),
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'date.setDate':
            return { ...state, date: action.date }

        default:
            return state
    }
}