const TOGGLE_THEME = 'change current theme';

const initalState = {
  darkTheme: true,
};

export const toogleTheme = () => ({
  type: TOGGLE_THEME,
});

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, darkTheme: state.darkTheme ? false : true };

    default:
      return state;
  }
}
