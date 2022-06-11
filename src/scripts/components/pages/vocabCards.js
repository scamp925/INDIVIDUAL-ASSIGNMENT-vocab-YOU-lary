import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const noVocabCards = () => {
  document.querySelector('#display-cards').innerHTML = 'No Vocabulary Cards; Please Create Your Word(s)';
};

const vocabCards = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `<div class="card" style="width: 18rem; color: black;">
    <div class="card-body">
      <h5 class="card-title">${item.word}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Category: ${item.category}</h6>
      <p class="card-text">${item.definition}</p>
      <a href="#" class="card-link" id="edit-btn--${item.firebaseKey}">Edit</a>
      <a href="#" class="card-link" id="delete-btn--${item.firebaseKey}">Delete</a>
    </div>
  </div>`;
    });
    renderToDom('#display-cards', domString);
  } else {
    noVocabCards();
  }
};

export default vocabCards;
