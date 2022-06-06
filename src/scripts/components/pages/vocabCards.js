import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const vocabCards = (array) => {
  clearDom();
  let domString = '';
  array.forEach((word) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${word.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">${word.definition}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  });
  renderToDom('#display-cards', domString);
};

export default vocabCards;
