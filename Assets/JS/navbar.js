let toggleBtn = document.querySelector('.toggleBtn');
let toggleBtnIcon = document.querySelector('.toggleBtn i');
let dropdownMenu = document.querySelector('.dropdownMenu');


//burger
toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
    let isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

//generateSideNavActive
function activeHome() {
    document.getElementById("navHome").className = "sideNavLink sideNavLinkActive";
    document.getElementById("navOpening").className = "sideNavLink";
    document.getElementById("navServices").className = "sideNavLink";
    document.getElementById("navShowcase").className = "sideNavLink";
    document.getElementById("navContact").className = "sideNavLink";
}
function activeOpening() {
    document.getElementById("navHome").className = "sideNavLink";
    document.getElementById("navOpening").className = "sideNavLink sideNavLinkActive";
    document.getElementById("navServices").className = "sideNavLink";
    document.getElementById("navShowcase").className = "sideNavLink";
    document.getElementById("navContact").className = "sideNavLink";
}
function activeServices() {
    document.getElementById("navHome").className = "sideNavLink";
    document.getElementById("navOpening").className = "sideNavLink";
    document.getElementById("navServices").className = "sideNavLink sideNavLinkActive";
    document.getElementById("navShowcase").className = "sideNavLink";
    document.getElementById("navContact").className = "sideNavLink";
}
function activeShowcase() {
    document.getElementById("navHome").className = "sideNavLink";
    document.getElementById("navOpening").className = "sideNavLink";
    document.getElementById("navServices").className = "sideNavLink";
    document.getElementById("navShowcase").className = "sideNavLink sideNavLinkActive";
    document.getElementById("navContact").className = "sideNavLink";
}
function activeContact() {
    document.getElementById("navHome").className = "sideNavLink";
    document.getElementById("navOpening").className = "sideNavLink";
    document.getElementById("navServices").className = "sideNavLink";
    document.getElementById("navShowcase").className = "sideNavLink";
    document.getElementById("navContact").className = "sideNavLink sideNavLinkActive";
}