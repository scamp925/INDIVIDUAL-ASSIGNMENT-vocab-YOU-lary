import signOut from '../helpers/auth/signOut';

const navBarEvents = () => {
  document.querySelector('#logout-btn')
    .addEventListener('click', signOut);
};

export default navBarEvents;
