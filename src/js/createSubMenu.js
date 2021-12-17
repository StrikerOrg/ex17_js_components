import { userMenu, arrow } from './consts';
import { closeMenu } from './closeMenu';

function createSubMenu() {
  if (!document.querySelector('.user-submenu')) {
    const ul = document.createElement('ul');
    arrow.className += '-reverse';
    ul.className = 'user-submenu';
    userMenu.append(ul);
    for (let i = 0; i < 5; i += 1) {
      ul.append(document.createElement('li'));
    }
    ul.children[0].innerHTML = "<a href = '#'>My account</a>";
    ul.children[1].innerHTML = "<a href = '#'>My tasks</a>";
    ul.children[2].innerHTML = "<a href = '#'>History</a>";
    ul.children[3].innerHTML = "<a href = '#'>About</a>";
    ul.children[4].innerHTML = "<a href = '#'>Out</a>";
  } else {
    closeMenu();
  }
}
export { createSubMenu };
