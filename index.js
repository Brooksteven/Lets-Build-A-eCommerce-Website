function openMenu() {
    //body is the section of the html. we are working on the body. menu--open is the class we are targeting. += adds it to the function.
    document.body.classList += " menu--open"
}

function closeMenu() {
    //"" remove is removing menu--open. += adds it and remove removes it
    document.body.classList.remove('menu--open')
}