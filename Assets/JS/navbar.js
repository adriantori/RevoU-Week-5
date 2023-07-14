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
/* function activeHome() {
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
} */

function activateNavigation(){
    let sections = document.querySelectorAll(".section");
    let navContainer = document.getElementById("sideNav");
    //nodelist -> array -> map into section
    let navItems = Array.from(sections).map(section =>{
        return `
            <div class="sideNavItem" dataForSection="${section.id}">
                <a href="#${section.id}" class="sideNavLink" id="nav${section.id}"></a>
                <span class="sideNavLabel">${section.dataset.label}</span>
            </div>
        `
    });

    let observer = new IntersectionObserver(entries => {
        //select all .sideNavLink, loop everything and remove .navLinkActive
        document.querySelectorAll(".sideNavLink").forEach(navLink => {
            navLink.classList.remove("sideNavLinkActive");
        });

        //filter "visible section"
        let visibleSection = entries.filter(entry=> entry.isIntersecting)[0];
        //select .sideNavItem -> attribute section of it, get ID
        document.querySelector(`.sideNavItem[dataForSection="${visibleSection.target.id}"] .sideNavLink`).classList.add("sideNavLinkActive");

    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    //join navItems content to #sideNav div
    navContainer.innerHTML = navItems.join("");

}

activateNavigation();