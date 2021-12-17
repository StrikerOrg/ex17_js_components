function initialization() {
  if (JSON.parse(localStorage.getItem('backlog')).issue.length === 0) {
    document
      .querySelector('.ready-button')
      .setAttribute('disabled', 'disabled');
  } else {
    document.querySelector('.ready-button').removeAttribute('disabled');
  }
  if (JSON.parse(localStorage.getItem('ready')).issue.length === 0) {
    document
      .querySelector('.progress-button')
      .setAttribute('disabled', 'disabled');
  } else {
    document.querySelector('.progress-button').removeAttribute('disabled');
  }
  if (JSON.parse(localStorage.getItem('progress')).issue.length === 0) {
    document
      .querySelector('.finished-button')
      .setAttribute('disabled', 'disabled');
  } else {
    document.querySelector('.finished-button').removeAttribute('disabled');
  }
}
export { initialization };
