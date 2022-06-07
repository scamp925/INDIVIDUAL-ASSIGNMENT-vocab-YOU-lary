import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import formEvents from '../events/formEvents';
import navbarEvents from '../events/navbarEvents';

const startApp = (user) => {
  domBuilder();
  formEvents(user.uid);
  navbar();
  logoutButton();
  navbarEvents(user.uid);
};

export default startApp;
