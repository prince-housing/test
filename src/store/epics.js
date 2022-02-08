import { combineEpics } from 'redux-observable';

import navigationEpic from './navigation/epics';

export default combineEpics(navigationEpic);
