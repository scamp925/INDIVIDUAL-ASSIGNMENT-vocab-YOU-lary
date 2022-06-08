import { getVocabCards } from '../../api/vocabCardsData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navbar from '../components/navbar';
import vocabCards from '../components/pages/vocabCards';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navbarEvents from '../events/navbarEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navbar();
  logoutButton();
  navbarEvents(user.uid);

  getVocabCards(user.uid).then((vocabCardsArray) => vocabCards(vocabCardsArray)); // Renders all vocab cards on landing page
};

export default startApp;
