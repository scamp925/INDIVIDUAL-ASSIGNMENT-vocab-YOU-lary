import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="main-container">
    <div id="filter-buttons"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="display-cards"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
