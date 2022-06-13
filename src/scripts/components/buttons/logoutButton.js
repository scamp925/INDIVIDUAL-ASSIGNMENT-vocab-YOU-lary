import renderToDom from '../../helpers/renderToDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger to-the-right">SIGN OUT</button>';
  renderToDom('#logout-btn', domString);
};

export default logoutButton;
