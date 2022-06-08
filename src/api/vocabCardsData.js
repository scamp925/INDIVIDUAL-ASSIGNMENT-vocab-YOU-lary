import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL VOCAB CARDS
const getVocabCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      resolve(Object.values(response.data));
    })
    .catch(reject);
});

// GET SINGLE VOCAB CARD
const getSingleVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE VOCAB CARD
const createVocabCard = (newVocabCardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, newVocabCardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, body)
        .then(() => {
          getVocabCards(newVocabCardObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

// UPDATE VOCAB CARD
const updateVocabCard = (vocabCardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${vocabCardObj.firebaseKey}.json`, vocabCardObj)
    .then(() => getVocabCards(vocabCardObj.uid).then(resolve))
    .catch(reject);
});

export {
  getVocabCards,
  getSingleVocabCard,
  createVocabCard,
  updateVocabCard,
};
