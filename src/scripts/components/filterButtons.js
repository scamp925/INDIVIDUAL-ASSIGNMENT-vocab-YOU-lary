import renderToDom from '../helpers/renderToDom';
import clearDom from '../helpers/clearDom';

const filterBtns = () => {
  clearDom();
  const domString = `<button type="button" class="btn btn-warning">HTML</button>
  <button type="button" class="btn btn-warning">CSS</button>
  <button type="button" class="btn btn-warning">Javascript</button>
  <button type="button" class="btn btn-warning">React</button>
  <button type="button" class="btn btn-warning">Python</button>`;
  renderToDom('#filter-buttons', domString);
};

export default filterBtns;
