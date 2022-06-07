import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addVocabCardForm = () => {
  clearDom();
  const domString = `<h2>Add New Word</h2>
  <form>
  <div class="mb-3">
  <label for="title" class="form-label">Word or Phrase</label>
  <input type="text" class="form-control" id="title" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="definition" class="form-label">Definition</label>
  <textarea class="form-control" id="definition" rows="3" placeholder="name@example.com"></textarea>
</div>
<div class="mb-3">
  <label for="title" class="form-label">Category</label>
  <input type="text" class="form-control" id="title" placeholder="Enter the coding language that best fits your new word">
</div>
<button type="submit" class="btn btn-success">Submit</button>
</form>`;
  renderToDom('#form-container', domString);
};

export default addVocabCardForm;
