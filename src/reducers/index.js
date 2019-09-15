const initialState = {
  batman: 0,
  aquaman: 0,
  wonderwoman: 0,
  flash: 0
};

export const voteForYourHero = (state = initialState, action = {}) => {
  switch (action.type) {
    case "VOTE_BATMAN":
      console.log("Your choice is Batman");
      return Object.assign({}, state, {
        batman: state.batman + 1
      });
    case "VOTE_AQUAMAN":
      console.log("Your choice is AquaMan");
      return Object.assign({}, state, {
        aquaman: state.aquaman + 1
      });
    case "VOTE_WONDERWOMAN":
      console.log("Your choice is Wonderwoman");
      return Object.assign({}, state, {
        wonderwoman: state.wonderwoman + 1
      });
    case "VOTE_FLASH":
      console.log("Your choice is Flash");
      return Object.assign({}, state, {
        flash: state.flash + 1
      });
    default:
      return state;
  }
};
