import { hotelConstants } from "../constants";

const initialState = {
    hotel_data: [],
    loading: "",
    hotel_error: "",
    notifier: ""
}

export function hotelRedux(state = initialState, action) {
    switch (action.type) {
      case hotelConstants.fetch_hotels_success:
        return {
          ...state,
          loading: "",
          hotel_data: action.payload,
        };
      case hotelConstants.fetch_hotels_fail:
        return {
          ...state,
          hotel_error: action.payload,
          notifier: { type: "error", sms: "Error occuired, failed" },
        };
      case hotelConstants.hoteLoading:
        return {
          ...state,
          loading: "Loading",
        };

      default:
          return state
    }
}