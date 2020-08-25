const debatesInitialState = {
  debates: {
    isFetched: false,
    results: [],
  },
  current_debate: {
    isFetched: false,
    data: null,
  },
};

const debatesReducer = (state, action) => {
  switch (action.type) {
    case "SET_DEBATES":
      return {
        ...state,
        debates: { results: [...action.payload], isFetched: true },
      };
    case "SET_CURRENT_DEBATE":
      return {
        ...state,
        current_debate: { data: action.payload, isFetched: true },
      };
    case "REMOVE_CURRENT_DEBATE":
      return {
        ...state,
        current_debate: { data: null, isFetched: false },
      };

    default:
      return state;
  }
};

export { debatesInitialState, debatesReducer };
