import API from '../../utils/api';

export const sendEmail = (name, email, content) => {
    return (dispatch) => {
        API.sendMail(name, email, content, res => {
            dispatch({
                type: 'SEND_MAIL',
                payload: {
                    message: res
                }
            })
        })
    }
} 

export const deleteMessage = (message)=> {
    return dispatch => {
        dispatch({
            type: 'DELETE_MESSAGE',
            payload: {
                message: message
            }
        })
    }
}