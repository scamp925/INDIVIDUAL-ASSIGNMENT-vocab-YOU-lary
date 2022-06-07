import addVocabCardForm from '../components/forms/addVocabCardForm';
import signOut from '../helpers/auth/signOut';

const navbarEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn')
    .addEventListener('click', signOut);
  // CREATE A NEW VOCAB CARD
  document.querySelector('#addNewVocab').addEventListener('click', () => {
    addVocabCardForm(uid);
  });
};

export default navbarEvents;
