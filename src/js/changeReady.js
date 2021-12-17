/* eslint-disable no-unused-vars */
import { isButtonClicked } from './consts';
import { initialization } from './initialization';
import { addTaskFromDropdown } from './addTaskFromDropdown';

function changeReady() {
  addTaskFromDropdown(
    '.ready-button',
    '.current-ready-task',
    'backlog',
    'ready',
    '.body-backlog',
  );
  initialization();
  isButtonClicked = false;
}
export { changeReady };
