import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navbarEvents from '../events/navbarEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navbarEvents(user.uid);
};

export default startApp;
