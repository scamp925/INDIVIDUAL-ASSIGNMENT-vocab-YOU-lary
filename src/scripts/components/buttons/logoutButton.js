import renderToDom from '../../helpers/renderToDom';

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">SIGN OUT</button>';
  renderToDom('#logout-btn', domString);
};

export default logoutButton;
