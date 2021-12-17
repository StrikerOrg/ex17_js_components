import { arrow } from './consts';

export function closeMenu() {
  const userSubmenu = document.querySelector('.user-submenu');
  arrow.className = 'arrow';
  userSubmenu.parentNode.removeChild(userSubmenu);
}
