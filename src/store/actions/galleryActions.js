import API from '../../utils/api';

export const getData = (galleryName) => {
    return (dispatch) => {
        API.getData(galleryName, res => {
            dispatch({
                type: 'GET_DATA',
                payload: {
                    data: res
                }
            })
        })
    }
} 

export const getImages = (galleryName, photosId) => {
    return (dispatch) => {
        API.getImages(galleryName, photosId, res => {
            dispatch({
                type: 'GET_IMAGES',
                payload: {
                    images: res
                }
            })
        })
    }
} 