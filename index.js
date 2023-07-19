function menuShow() {
  let menuMobile = document.querySelector("#contener-menu-mob")
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open")
  } else {
    menuMobile.classList.add("open")
  }
}
