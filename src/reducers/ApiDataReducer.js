export const ApiDataReducer = (state, action) => {
  switch (action.type) {
    case "API_DATA":
      return {
        ...state,
        launchData: action.launchData,
      };
    case "YEAR_CHANGE_TYPE":
      return {
        ...state,
        baseUrl: action.baseUrl,
      };
    case "LAUNCH_STATE_CHANGE":
        return {
            ...state,
            baseUrl: action.baseUrl,
            launchState: action.launchState,
        };
    case "LAND_STATE_CHANGE":
        return {
            ...state,
            baseUrl: action.baseUrl,
            landState: action.landState,
        };
    default:
      return state;
  }
};
