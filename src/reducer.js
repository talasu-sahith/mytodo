const reducer = (state, action) => {
  if (action.type === "NavigateTodo") {
    return {
      ...state,
      currentdata: action.payload.item.data,
      currentuser: action.payload.item.name,
    };
  }
  if (action.type === "NavigateHome") {
    const currusers = state.users;
    currusers.map((c) =>
      c.name === action.payload.cuser ? (c.data = action.payload.task) : c
    );
    return { ...state, users: currusers, currentdata: [], currentuser: "" };
  }
  throw new Error(`No Matching "${action.type}" - of action type`);
};

export default reducer;
