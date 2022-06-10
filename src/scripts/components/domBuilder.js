import renderToDom from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="filter-container"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="display-cards"></div>
  </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
