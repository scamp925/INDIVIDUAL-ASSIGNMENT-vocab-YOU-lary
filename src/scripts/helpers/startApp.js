import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import formEvents from '../events/formEvents';
import navbarEvents from '../events/navbarEvents';

const startApp = (user) => {
  domBuilder();
  formEvents(user.uid);
  navBar();
  logoutButton();
  navbarEvents(user.uid);
};

export default startApp;
