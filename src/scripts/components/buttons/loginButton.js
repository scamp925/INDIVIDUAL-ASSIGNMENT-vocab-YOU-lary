import signIn from '../../helpers/auth/signIn';
import renderToDom from '../../helpers/renderToDom';
import ABC from '../../../images/ABC.png';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<div class="login">
  <img src=${ABC} alt="ABC blocks" class="abc">
  <h1>Welcome to Vocab-YOU-lary!</h1>
  <button id="google-auth" class="btn btn-danger">SIGN IN</button>
  </div>`;
  renderToDom('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
