import renderToDom from '../helpers/renderToDom';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://w7.pngwing.com/pngs/119/1012/png-transparent-computer-icons-vocabulary-youtube-notification-angle-text-logo.png" alt="Vocab-YOU-lary Logo" width="40" height="30">
    </a>
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <span class="navbar-text">
        <div id="logout-btn"></div>
      </span>
    </div>
  </div>
</nav>`;
  renderToDom('#nav-bar', domString);
};

export default navBar;
