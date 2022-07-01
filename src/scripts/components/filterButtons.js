import renderToDom from '../helpers/renderToDom';

const filterBtns = () => {
  const domString = `<div class="d-grid gap-2 d-md-block fliter">
  <button type="button" class="btn btn-warning" id="html">HTML</button>
  <button type="button" class="btn btn-warning" id="css">CSS</button>
  <button type="button" class="btn btn-warning" id="javascript">JavaScript</button>
  <button type="button" class="btn btn-warning" id="react">React</button>
  <button type="button" class="btn btn-warning" id="python">Python</button>
  <button type="button" class="btn btn-warning" id="all">All Languages</button>
  <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Sort Vocabulary Cards</button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item">A-Z</a></li>
      <li><a class="dropdown-item">Newest</a></li>
      <li><a class="dropdown-item">Oldest</a></li>
    </ul>
  </div>`;
  renderToDom('#filter-container', domString);
};

export default filterBtns;
