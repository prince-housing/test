import { CommonActions } from '@react-navigation/native';

let navigation = null;

export const setNavigator = navigatorRef => {
  navigation = navigatorRef;
};

export const getNavigator = () => navigation;

export const navigate = (routeName, params, key = undefined) => {
  const payload = {
    name: routeName,
    params,
  };
  if (key) {
    payload.key = key;
  }
  navigation?.navigate(payload);
};

export const push = (routeName, params) => {
  navigation?.push(routeName, params);
};

export const pop = (numberOfScreens = 1) => {
  navigation?.pop({
    immediate: true,
    n: numberOfScreens,
  });
};

export const goBack = (key = '') => {
  navigation?.goBack({ key });
};

export const reset = (routes, index) => {
  navigation?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
};
