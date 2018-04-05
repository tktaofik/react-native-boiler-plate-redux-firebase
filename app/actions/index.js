import { bindActionCreators } from 'redux';
import { appStore } from '../../App';
import { authActionCreator } from '../store/authStore';

export default () => ({
  dispatch: appStore.dispatch,
  actions: {
    auth: bindActionCreators(authActionCreator, appStore.dispatch),
  },
});
