import signOut from '../helpers/auth/signOut';

const navbarEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn')
    .addEventListener('click', signOut);
  // CREATE A NEW VOCAB CARD
  document.querySelector('#addNewVocab').addEventListener('click', () => {
    console.warn('FIX ME');
  });
};

export default navbarEvents;
