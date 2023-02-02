import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    // NOT API CALL
    if (action.type !== actions.apiCallBegan.type) return next(action);

    // API CALL
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
    try {
      if (onStart) dispatch({ type: onStart });
      next(action);

      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });

      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) {
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
      }
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) {
        dispatch({
          type: onError,
          payload: error.message,
        });
      }
    }
  };

export default api;
