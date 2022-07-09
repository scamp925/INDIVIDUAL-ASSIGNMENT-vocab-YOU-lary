import renderToDom from '../helpers/renderToDom';
import ABC from '../../images/ABC-square.png';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" id="home">
      <img src=${ABC} alt="ABC blocks" width="50" height="50" style="border-radius: 50%;">
      Vocab-YOU-lary
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" id="addNewVocab">Create a New Word</a>
        </li>
      </ul>
    </div>
    <div id="logout-btn"></div>
  </div>
</nav>`;
  renderToDom('#navbar', domString);
};

export default navBar;
