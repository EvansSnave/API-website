import appId from './modules/appID.js';

if (!localStorage.getItem('appId')) {
  appId();
}
