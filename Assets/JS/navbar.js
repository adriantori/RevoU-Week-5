let toggleBtn = document.querySelector('.toggleBtn');
let toggleBtnIcon = document.querySelector('.toggleBtn i');
let dropdownMenu = document.querySelector('.dropdownMenu');

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
    let isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}