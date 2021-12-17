/* eslint-disable no-unused-vars */
import { addTaskFromDropdown } from './addTaskFromDropdown';
import { initialization } from './initialization';
import { isButtonClicked } from './consts';

function changeFinished() {
  addTaskFromDropdown(
    '.finished-button',
    '.current-finished-task',
    'progress',
    'finished',
    '.body-progress',
  );
  initialization();
  isButtonClicked = false;
}
export { changeFinished };
