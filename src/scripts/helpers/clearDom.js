const clearDom = () => {
  document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#display-cards').innerHTML = '';
};

export default clearDom;
