

let dialog = document.querySelector('.modal');
let openButtons = document.querySelectorAll('.open-modal');
let closeButton = document.querySelector('.button-close-modal');
for (let openButton of openButtons) {
  openButton.onclick = function () {
    dialog.showModal();
  }
};
closeButton.onclick = function (event) {
  event.stopPropagation()
  dialog.close();
};
dialog.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    event.currentTarget.close()
  }
})
