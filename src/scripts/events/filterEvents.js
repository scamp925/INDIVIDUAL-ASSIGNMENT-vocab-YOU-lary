import {
  cssCards,
  getVocabCards,
  htmlCards,
  javascriptCards,
  pythonCards,
  reactCards
} from '../../api/vocabCardsData';
import vocabCards from '../components/pages/vocabCards';

const filterEvents = (uid) => {
  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('html')) {
      htmlCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('css')) {
      cssCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('javascript')) {
      javascriptCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('react')) {
      reactCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('python')) {
      pythonCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('all')) {
      getVocabCards(uid).then((vocabCardsArray) => vocabCards(vocabCardsArray));
    }
    if (e.target.id.includes('A-Z')) {
      getVocabCards(uid).then((vocabCardsArray) => {
        const aToZArray = vocabCardsArray.sort((a, b) => a.word.localeCompare(b.word));
        vocabCards(aToZArray);
      });
    }
  });
};

export default filterEvents;
