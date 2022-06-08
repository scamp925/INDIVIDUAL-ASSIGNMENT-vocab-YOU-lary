import { getSingleVocabCard } from '../../api/vocabCardsData';
import addVocabCardForm from '../components/forms/addVocabCardForm';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR EDITING/UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((vocabCardObj) => addVocabCardForm(vocabCardObj, uid));
    }
  });
};

export default domEvents;
