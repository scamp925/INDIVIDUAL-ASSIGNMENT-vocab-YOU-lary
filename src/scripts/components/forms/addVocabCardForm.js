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
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px" required>${obj.definition || ''}</textarea>
      </div>
    <label for="category">Category</label>
    <div class="form mb-3">
      <select class="form-select form-control-lg" id="category" aria-label="category" required>
        <option value="">Select a category</option>
        <option value="HTML" ${obj.category === 'HTML' ? 'selected' : ''}>HTML</option>
        <option value="CSS" ${obj.category === 'CSS' ? 'selected' : ''}>CSS</option>
        <option value="JavaScript" ${obj.category === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
        <option value="React" ${obj.category === 'React' ? 'selected' : ''}>React</option>
        <option value="Python" ${obj.category === 'Python' ? 'selected' : ''}>Python</option>
      </select>
    </div>
      <button type="submit" class="btn btn-success">${obj.firebaseKey ? 'Update' : 'Submit'}</button>
</form>`;
  renderToDom('#form-container', domString);
};

export default addVocabCardForm;
