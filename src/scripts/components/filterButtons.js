import renderToDom from '../helpers/renderToDom';

const filterBtns = () => {
  const domString = `<div class="d-grid gap-2 d-md-block">
  <button type="button" class="btn btn-warning" id="html">HTML</button>
  <button type="button" class="btn btn-warning" id="css">CSS</button>
  <button type="button" class="btn btn-warning" id="javascript">JavaScript</button>
  <button type="button" class="btn btn-warning" id="react">React</button>
  <button type="button" class="btn btn-warning" id="python">Python</button>
  <button type="button" class="btn btn-warning" id="all">All Languages</button>
  </div>`;
  renderToDom('#filter-container', domString);
};

export default filterBtns;
