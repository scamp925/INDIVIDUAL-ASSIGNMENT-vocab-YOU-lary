import { deleteVocabCard, getSingleVocabCard } from '../../api/vocabCardsData';
import addVocabCardForm from '../components/forms/addVocabCardForm';
import vocabCards from '../components/pages/vocabCards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR EDITING/UPDATING A VOCAB CARD
    if (e.target.id.includes('edit-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabCard(firebaseKey).then((vocabCardObj) => addVocabCardForm(vocabCardObj, uid));
    }
    // CLICK EVENT FOR DELETING A VOCAB CARD
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Vocabulary card will be permanently deleted. Do you still want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabCard(uid, firebaseKey).then((vocabArray) => vocabCards(vocabArray));
      }
    }
  });
};

export default domEvents;
