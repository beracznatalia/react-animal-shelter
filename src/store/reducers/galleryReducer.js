const defaultState = {
    images: [],
    data: []
}
const gallery = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_DATA': 
            return {
                ...state,
                data: action.payload.data
            }
        case 'GET_IMAGES':
            return {
                ...state,
                images: action.payload.images
            }
        default:
            return state
    } 
}
export default gallery;
   
// return {
//     ...state,
//     threads: state.threads.filter(t => t.id === action.payload.id).length === 0 ? 
//         state.threads.concat(action.payload)
//         : state.threads
// }