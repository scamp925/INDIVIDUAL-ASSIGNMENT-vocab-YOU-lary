import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addVocabCardForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab-word--${obj.firebaseKey}` : 'submit-vocab-word'}">
  <div class="mb-3">
  <label for="title" class="form-label">Word or Phrase</label>
  <input type="text" class="form-control" id="title" placeholder="Your Word Here" value="${obj.title || ''}" required>
</div>
<div class="mb-3">
  <label for="definition" class="form-label">Definition</label>
  <textarea class="form-control" id="definition" rows="3" placeholder="Enter Definition" value="${obj.definition || ''} required></textarea>
</div>
<div class="mb-3">
  <label for="title" class="form-label">Category</label>
  <input type="text" class="form-control" id="category" placeholder="Enter the coding language that best fits your new word" value="${obj.category || ''}" required>
</div>
<button type="submit" class="btn btn-success">Submit</button>
</form>`;
  renderToDom('#form-container', domString);
};

export default addVocabCardForm;
