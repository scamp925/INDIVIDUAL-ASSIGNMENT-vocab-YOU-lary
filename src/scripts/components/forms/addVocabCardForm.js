import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addVocabCardForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-vocab-word--${obj.firebaseKey}` : 'submit-vocab-word'}" class="mb-4">
  <div class="form-group">
        <label for="word">Word or Phrase</label>
        <input type="text" class="form-control" id="word" aria-describedby="vocab-work" placeholder="Enter Your Word or Phrase Here" value="${obj.word || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Enter the Coding Language Associated with Your Word/Phrase" value="${obj.category || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Book
      </button>
</form>`;
  renderToDom('#form-container', domString);
};

export default addVocabCardForm;
