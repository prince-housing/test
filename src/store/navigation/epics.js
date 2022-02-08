import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import Types from './types';

import * as NavigationServices from '../../utils/navigation-services';

function handleNavigation(action$, store) {
  return action$.pipe(
    ofType(Types.NAVIGATE),
    mergeMap(action => {
      const {
        payload: { routeName, params },
      } = action;
      NavigationServices.navigate(routeName, params);
      return [];
    }),
  );
}

export default combineEpics(handleNavigation);
