import { deleteItem } from './deleteItem';

function addTaskFromDropdown(
  currentButtonClass,
  selectName,
  previos,
  current,
  bodyPrevios,
) {
  const currentButton = document.querySelector(currentButtonClass);
  const currentDropdown = document.querySelector(selectName);
  const index = currentDropdown.options.selectedIndex - 1;
  const previousObject = JSON.parse(localStorage.getItem(previos));
  const currentObject = JSON.parse(localStorage.getItem(current));
  const bufferTask = {
    ...previousObject.issue[index],
  };
  bufferTask.id = `task${currentObject.issue.length}`;
  previousObject.issue.splice(index, 1);
  localStorage.setItem(previos, JSON.stringify(previousObject));
  currentObject.issue.push(bufferTask);
  localStorage.setItem(current, JSON.stringify(currentObject));
  const task = document.createElement('div');
  task.className = 'task-item';
  task.innerHTML = bufferTask.name;
  currentButton.before(task);
  deleteItem(bodyPrevios, index);
  currentDropdown.remove();
}
export { addTaskFromDropdown };
