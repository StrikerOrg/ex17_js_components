/* eslint-disable no-unused-vars */
import { addTaskFromDropdown } from './addTaskFromDropdown';
import { initialization } from './initialization';
import { isButtonClicked } from './consts';

function changeProgress() {
  addTaskFromDropdown(
    '.progress-button',
    '.current-progress-task',
    'ready',
    'progress',
    '.body-ready',
  );
  initialization();
  isButtonClicked = false;
}
export { changeProgress };
