import { connect } from 'react-redux';

import * as NavigationActions from '../../utils/navigation-services';
import routeNames from '../';
import HomeScreen from './Home';

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    handleTextPress: () => NavigationActions.navigate(routeNames.DeviceInfo),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
