import { isButtonClicked } from './consts';
import { initialization } from './initialization';

function createDropDown(
  localStorageProperty,
  className,
  buttonName,
  tabIndex,
  handler,
) {
  initialization();
  if (!isButtonClicked === true) {
    if (
      JSON.parse(localStorage.getItem(localStorageProperty)).issue.length > 0
    ) {
      const ready = document.querySelector(buttonName);
      const currentDropdown = document.createElement('select');
      currentDropdown.className = className;
      currentDropdown.setAttribute('tabindex', tabIndex);
      ready.before(currentDropdown);
      const currentObject = JSON.parse(
        localStorage.getItem(localStorageProperty),
      );
      currentDropdown.append(new Option('choose task:'));
      for (let i = 0; i < currentObject.issue.length; i += 1) {
        currentDropdown.append(
          new Option(currentObject.issue[i].name, currentObject.issue[i].id),
        );
      }
      document
        .querySelector(`.${className}`)
        .addEventListener('change', handler);
      document.querySelector(`.${className}`).addEventListener('blur', () => {
        if (!currentDropdown.selectedIndex) {
          currentDropdown.remove();
          isButtonClicked = false;
        }
      });
    }
    isButtonClicked = true;
  }
}
export { createDropDown };
