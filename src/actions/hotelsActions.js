import api from "../api";
import { hotelConstants } from "../constants";

const actionLoad = () => {
  return {
    type: hotelConstants.hoteLoading,
  };
};

export const fetchHotels = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api.fetchHotels().then(response => {
      console.log(response);
      dispatch({
          type: hotelConstants.fetch_hotels_success,
          payload: response.data
      });
    }).catch((error) => {
        dispatch({
            type: hotelConstants.fetch_hotels_fail,
            payload: error
        });
    });
  };
};
