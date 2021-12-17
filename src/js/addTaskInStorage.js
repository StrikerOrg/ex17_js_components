/* eslint-disable no-unused-vars */
import { isButtonClicked } from './consts';
import { initialization } from './initialization';

function addTaskInStorage() {
  const input = document.querySelector('.current-backlog-task');
  const backlog = document.querySelector('.backlog-button');
  const currentObject = JSON.parse(localStorage.getItem('backlog'));
  if (input.value !== '') {
    const task = document.createElement('div');
    currentObject.issue.push({
      id: `task${currentObject.issue.length}`,
      name: input.value,
    });
    localStorage.setItem('backlog', JSON.stringify(currentObject));
    task.className = 'task-item';
    task.innerHTML = input.value;
    backlog.before(task);
  }
  input.remove();
  initialization();
  isButtonClicked = false;
}
export { addTaskInStorage };
