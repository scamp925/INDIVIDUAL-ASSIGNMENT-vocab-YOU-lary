import { createVocabCard, updateVocabCard } from '../../api/vocabCardsData';
import vocabCards from '../components/pages/vocabCards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING VOCAB CARD
    if (e.target.id.includes('submit-vocab-word')) {
      const newVocabCardObj = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        dateOnCard: new Date().toLocaleString(),
        time_stamp: Date.now(),
        uid,
      };
      createVocabCard(newVocabCardObj).then((cardsArray) => vocabCards(cardsArray));
    }
    // CLICK EVENT FOR UPDATING/EDITING VOCAB CARD
    if (e.target.id.includes('update-vocab-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const updatedVocabObj = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        dateOnCard: new Date().toLocaleString(),
        time_stamp: Date.now(),
        firebaseKey,
        uid,
      };
      updateVocabCard(updatedVocabObj).then(vocabCards);
    }
  });
};

export default formEvents;
