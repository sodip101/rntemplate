import remoteConfig from '@react-native-firebase/remote-config';

const initialState = {
  add_to_home_enabled: false,
  is_under_maintenance: false,
};

const ADD_TO_HOME = 'feature-flags/add_to_home_enabled';
const UNDER_MAINTENANCE = 'feature-flags/is_under_maintenance';

const fetchAddToHome = value => ({
  type: ADD_TO_HOME,
  payload: value,
});

const fetchUnderMaintenance = value => ({
  type: UNDER_MAINTENANCE,
  payload: value,
});

export const remoteConfigFirebase = () => {
  return async dispatch => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 300,
    });
    await remoteConfig().setDefaults({
      add_to_home_enabled: initialState.add_to_home_enabled,
      is_under_maintenance: initialState.is_under_maintenance,
    });
    await remoteConfig().fetchAndActivate();

    const add_to_home_enabled = remoteConfig()
      .getValue('add_to_home_enabled')
      .asBoolean();

    dispatch(fetchAddToHome(add_to_home_enabled));

    const is_under_maintenance = remoteConfig()
      .getValue('is_under_maintenance')
      .asBoolean();

    dispatch(fetchUnderMaintenance(is_under_maintenance));
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_HOME:
      return { ...state, add_to_home_enabled: action.payload };
    case UNDER_MAINTENANCE:
      return { ...state, is_under_maintenance: action.payload };
    default:
      return state;
  }
}
