function deleteItem(className, index) {
  const element = document.querySelector(className);
  element.removeChild(document.querySelectorAll('.task-item')[index]);
}
export { deleteItem };
