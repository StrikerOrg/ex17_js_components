import { isButtonClicked } from './consts';
import { addTaskInStorage } from './addTaskInStorage';

function addItemInBacklog() {
  if (!isButtonClicked === true) {
    const currentTask = document.createElement('input');
    const backlog = document.querySelector('.backlog-button');
    currentTask.type = 'text';
    currentTask.className = 'current-backlog-task';
    currentTask.setAttribute('tabindex', '2');
    backlog.before(currentTask);
    document
      .querySelector('.current-backlog-task')
      .addEventListener('blur', addTaskInStorage);
    isButtonClicked = true;
  }
}
export { addItemInBacklog };
