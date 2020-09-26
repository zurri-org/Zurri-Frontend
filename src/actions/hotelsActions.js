const { hotelConstants } = require("../constants")

const actionLoad = () => {
    return {
        type: hotelConstants.hoteLoading
    };
}

export const fetchHotels = () => {
    return (dispatch => {
        dispatch(actionLoad());

        return()
    })
}