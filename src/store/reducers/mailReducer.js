const defaultState = {
    message: null
}
const mail = (state = defaultState, action) => {
    switch(action.type) {
        case 'SEND_MAIL': 
            return {
                message: action.payload.message
            }
        case 'DELETE_MESSAGE': 
            return {
                message: action.payload.message
            }
        default:
            return state
    } 
}
export default mail;
   