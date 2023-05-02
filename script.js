const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const dotContainer = document.querySelector(".dots");
const showcase = document.querySelector(".showcase");
const subhead = document.querySelectorAll(".subhead");
const cartsgrid = document.querySelectorAll(".cartsgrid");
const addCart = document.querySelectorAll(".addcart");
const shopCart = document.querySelector(".shopcart");
const subTotal = document.querySelector(".subtotal");
const delItem = document.querySelectorAll(".delitem");
const cartBar = document.querySelector(".cartbar");
const bagCart = document.querySelector(".bagcart");
const btnClose = document.querySelector(".closebtn");
const btnMenu = document.querySelector(".btnmenu");
const menuBar = document.querySelector(".menubar");

let total = 0;
let curslide = 0;
const maxSlide = slides.length;

const gotoSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
gotoSlide(0);

const nextSlide = function () {
  if (curslide === maxSlide - 1) {
    curslide = 0;
  } else {
    curslide++;
  }
  gotoSlide(curslide);
  activateDot(curslide);
};
setInterval(nextSlide, 5000);

const preSlide = function () {
  if (curslide === 0) {
    curslide = maxSlide - 1;
  } else {
    curslide--;
  }
  gotoSlide(curslide);
  activateDot(curslide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", preSlide);

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<span class="dots__dot  rounded-full h-3 w-3 border-2 border-white" data-slide="${i}"></span>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("bg-white"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("bg-white");
};
activateDot(0);

showcase.addEventListener("click", function (e) {
  if (e.target.classList.contains("subhead")) {
    const textcon = e.target.textContent.trim();
    subhead.forEach((g) => g.classList.add("text-gray-500"));
    e.target.classList.remove("text-gray-500");
    cartsgrid.forEach(function (grid, i) {
      grid.classList.add("hidden");
    });
    document.querySelector(`.${textcon}`).classList.remove("hidden");
  }
});
const opencart = function () {
  cartBar.classList.remove("translate-x-full");
  document.querySelector(".overlay").classList.remove("hidden");
};
const closecart = function () {
  cartBar.classList.add("translate-x-full");
  document.querySelector(".overlay").classList.add("hidden");
};
addCart.forEach(function (cart) {
  cart.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    const itemname = parent.querySelector(".item-name").textContent;
    const itemprice = parent.querySelector(".item-price").textContent;
    let temp = Number(itemprice.slice(1).replace(",", ""));

    const itemimage = parent.querySelector(".item-image").src;
    let html = `<div class="flex text-sm w-[90%] h-20 mx-5 py-2 gap-x-5 border-b-2 close relative">
    <img src="${itemimage}" alt="img" />
    <h2 class="grid w-32 md:w-auto">${itemname}<span class="item-price">${itemprice}</span></h2>
    <div class="absolute right-5  delitem"><i class="fa-solid fa-xmark text-lg"></i></div>
  </div>`;
    shopCart.insertAdjacentHTML("beforeend", html);
    total += temp;
    subTotal.textContent = `₹${total}`;
    opencart();
  });
});

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.closest(".delitem")) {
      const parent = e.target.parentElement.parentElement;
      const itemprice = parent.querySelector(".item-price").textContent;
      let temp = Number(itemprice.slice(1).replace(",", ""));
      total -= temp;
      subTotal.textContent = `₹${total}`;
      parent.classList.add("hidden");
    }
  });
});

bagCart.addEventListener("click", function () {
  opencart();
});

btnClose.addEventListener("click", function () {
  closecart();
});
document.querySelector(".overlay").addEventListener("click", function (e) {
  closecart();
});

const openmenu = function () {
  menuBar.classList.remove("translate-x-[-100%]");
  document.querySelector(".overlay").classList.remove("hidden");
};
const closemenu = function () {
  menuBar.classList.add("translate-x-[-100%]");
  document.querySelector(".overlay").classList.add("hidden");
};
btnMenu.addEventListener("click", function () {
  openmenu();
});
document.querySelector(".overlay").addEventListener("click", function (e) {
  closemenu();
});
