// Copy menu for mobile
function copyMenu() {
  // Copy insane .dpt-cat to .departments
  let dptCategory = document.querySelector(".dpt-cat");
  let dptPlace = document.queryselector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy inside nav to nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // Copy .header-top .wrapper to .thetop-nav
  let topNav = document.querySelector(".header-top");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();
