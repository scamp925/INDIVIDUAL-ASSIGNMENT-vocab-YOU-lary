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

// DELETE VOCAB CARD
const deleteVocabCard = (uid, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getVocabCards(uid).then((vocabArray) => resolve(vocabArray));
    })
    .catch(reject);
});

// FILTER VOCAB CARDS BY CATEGORY
const htmlCards = (uid) => new Promise((resolve, reject) => {
  getVocabCards(uid)
    .then((userCards) => {
      const onlyHTML = userCards.filter((card) => card.category === 'HTML');
      resolve(onlyHTML);
    })
    .catch(reject);
});

const cssCards = (uid) => new Promise((resolve, reject) => {
  getVocabCards(uid)
    .then((userCards) => {
      const onlyCSS = userCards.filter((card) => card.category === 'CSS');
      resolve(onlyCSS);
    })
    .catch(reject);
});

const javascriptCards = (uid) => new Promise((resolve, reject) => {
  getVocabCards(uid)
    .then((userCards) => {
      const onlyCSS = userCards.filter((card) => card.category === 'JavaScript');
      resolve(onlyCSS);
    })
    .catch(reject);
});

const reactCards = (uid) => new Promise((resolve, reject) => {
  getVocabCards(uid)
    .then((userCards) => {
      const onlyCSS = userCards.filter((card) => card.category === 'React');
      resolve(onlyCSS);
    })
    .catch(reject);
});

const pythonCards = (uid) => new Promise((resolve, reject) => {
  getVocabCards(uid)
    .then((userCards) => {
      const onlyCSS = userCards.filter((card) => card.category === 'Python');
      resolve(onlyCSS);
    })
    .catch(reject);
});
export {
  getVocabCards,
  getSingleVocabCard,
  createVocabCard,
  updateVocabCard,
  deleteVocabCard,
  htmlCards,
  cssCards,
  javascriptCards,
  reactCards,
  pythonCards,
};
