import { addItemInBacklog } from './src/js/addItemInBacklog';
import { changeFinished } from './src/js/changeFinished';
import { changeProgress } from './src/js/changeProgress';
import { changeReady } from './src/js/changeReady';
import { createDropDown } from './src/js/createDropDown';
import { initialization } from './src/js/initialization';

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
