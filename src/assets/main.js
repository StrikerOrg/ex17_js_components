import { addItemInBacklog } from './src/js/addItemInBacklog.js';
import { addTaskFromDropdown } from './src/js/addTaskFromDropdown.js';
import { addTaskInStorage } from './src/js/addTaskInStorage.js';
import { changeFinished } from './src/js/changeFinished.js';
import { changeProgress } from './src/js/changeProgress.js';
import { changeReady } from './src/js/changeReady.js';
import { closeMenu } from './src/js/closeMenu.js';
import { consts } from './src/js/consts.js';
import { createDropDown } from './src/js/createDropDown.js';
import { createSubMenu } from './src/js/createSubMenu.js';
import { deleteItem } from './src/js/deleteItem.js';
import { initialization } from './src/js/initialization.js';

document.querySelector('.ready-button').addEventListener('click', () => {
  createDropDown(
    'backlog',
    'current-ready-task',
    '.ready-button',
    '4',
    changeReady,
  );
});

document.querySelector('.progress-button').addEventListener('click', () => {
  createDropDown(
    'ready',
    'current-progress-task',
    '.progress-button',
    '6',
    changeProgress,
  );
});

document.querySelector('.finished-button').addEventListener('click', () => {
  createDropDown(
    'progress',
    'current-finished-task',
    '.finished-button',
    '8',
    changeFinished,
  );
});

window.addEventListener('load', initialization);

document
  .querySelector('.backlog-button')
  .addEventListener('click', addItemInBacklog);
