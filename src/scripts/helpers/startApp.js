import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navBarEvents from '../events/navbarEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  navBarEvents(user.uid);
};

export default startApp;
