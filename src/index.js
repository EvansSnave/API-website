import appId from './modules/appID';

if(!localStorage.getItem('appId')){
  appId();
}
