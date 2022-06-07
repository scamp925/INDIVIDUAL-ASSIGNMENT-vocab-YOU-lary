import { createVocabCard } from '../../api/vocabCardsData';
import vocabCards from '../components/pages/vocabCards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING VOCAB CARD
    if (e.target.id.includes('')) {
      const newVocabCardObj = {
        word: document.querySelector('#word').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid
      };
      createVocabCard(newVocabCardObj).then((cardsArray) => vocabCards(cardsArray));
    }
  });
};

export default formEvents;
