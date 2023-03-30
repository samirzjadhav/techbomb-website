// Copy menu for mobile
function copyMenu() {
  // Copy insane .dpt-cat to .departments
  const dptCategory = document.querySelector(".dpt-cat");
  const dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  // Copy inside nav to nav
  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  // Copy .header-top .wrapper to .thetop-nav
  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector(".trigger");
const closeButton = document.querySelector(".t-close");
const addClass = document.querySelector(".site");

menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});

closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

// Show sub menu on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// Swiperjs.com code
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// Show search
const searchButton = document.querySelector(".t-search");
const tClose = document.querySelector(".search-close");
const showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// show dpt menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".site");

dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

// Product image slider

var productThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});

var productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

// Stock Products bar with percentage
const stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock;
  let available = stocks[x].querySelector(".qty-available").innerHTML;
  let sold = stocks[x].querySelector(".qty-sold").innerHTML;
  let percent = (sold * 100) / stock;

  stocks[x].querySelector(".available").style.width = percent + "%";
}
