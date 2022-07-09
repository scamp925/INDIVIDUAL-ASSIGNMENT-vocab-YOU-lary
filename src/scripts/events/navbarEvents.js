import { getVocabCards } from '../../api/vocabCardsData';
import filterBtns from '../components/filterButtons';
import addVocabCardForm from '../components/forms/addVocabCardForm';
import vocabCards from '../components/pages/vocabCards';
import signOut from '../helpers/auth/signOut';

const navbarEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn')
    .addEventListener('click', signOut);
  // CREATE A NEW VOCAB CARD
  document.querySelector('#addNewVocab').addEventListener('click', () => {
    addVocabCardForm(uid);
  });
  // BACK TO THE HOMEPAGE FROM LOGO
  document.querySelector('#home').addEventListener('click', () => {
    filterBtns();
    getVocabCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
  });
};

export default navbarEvents;
