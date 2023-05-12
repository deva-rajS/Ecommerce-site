const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const dotContainer = document.querySelector(".dots");
const showcase = document.querySelector(".showcase");
const subhead = document.querySelectorAll(".subhead");
const cartsgrid = document.querySelector(".cartsgrid");
const shopCart = document.querySelector(".shopcart");
const subTotal = document.querySelector(".subtotal");
const delItem = document.querySelectorAll(".delitem");
const cartBar = document.querySelector(".cartbar");
const bagCart = document.querySelector(".bagcart");
const btnClose = document.querySelector(".closebtn");
const btnMenu = document.querySelector(".btnmenu");
const menuBar = document.querySelector(".menubar");
const itemsList = document.querySelector(".itemslist");

let total = 0;
let curslide = 0;
const maxSlide = slides.length;

const WATCH = [
  { title: "Best Watch", price: "₹1,900", image: "/img/watchs/watch1.jpeg" },
  {
    title: "Free shipping",
    price: "₹2,199",
    image: "/img/watchs/watch-10-1024x1024.jpeg",
  },
  { title: "Hot Selling", price: "₹2,299", image: "/img/watchs/watch-4.jpeg" },
  {
    title: "Premium Gold Chronagraph",
    price: "₹2,599",
    image: "/img/watchs/watch-8.jpeg",
  },
  {
    title: "Smart i-watch & Airpods",
    price: "₹2,999",
    image: "/img/watchs/IMG-20211225-WA0054.jpg",
  },
  {
    title: "Fastrack Watch Demand",
    price: "₹2,599",
    image: "/img/watchs/3281KM02_1.jpg",
  },
  {
    title: "Watches",
    price: "₹2,199",
    image: "/img/watchs/IMG-20210730-WA0008.jpg",
  },
  {
    title: "Watches",
    price: "₹3,149",
    image: "/img/watchs/IMG-20210730-WA0015-600x600.jpg",
  },
];
const SHOES = [
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220212-WA0002-600x600.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220213-WA0002-600x600.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220205-WA0004-300x300.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220205-WA0005-600x597.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220205-WA0012-600x600.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220205-WA0011-600x600.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220205-WA0009-600x600.jpg",
  },
  {
    title: "Sports Shoes",
    price: "₹999",
    image: "/img/shoes/IMG-20220213-WA0002-600x600.jpg",
  },
];
const SLIDES = [
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210724-WA0014-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210725-WA0017-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210721-WA0000-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210721-WA0017-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210723-WA0012-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210723-WA0013-600x597.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210723-WA0020-600x600.jpg",
  },
  {
    title: "Slides In Stock",
    price: "₹700",
    image: "/img/slidess/IMG-20210721-WA0018-600x600.jpg",
  },
];
const mainCartArr = [{ WATCH: WATCH }, { SHOES: SHOES }, { SLIDES: SLIDES }];

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

const renderCart = function (data) {
  const html = `<div
  class="group font-semibold text-center pb-3 hover:z-10 relative hover:shadow-2xl hover:shadow-black transition ease-in-out hover:-translate-y-2"
>
  <img src=".${data.image}" alt="img" class="item-image" />
  <h2 class="pt-3 text-xs sm:text-base item-name">${data.title}</h2>
  <h2 class="item-price">${data.price}</h2>
  <div
    class="hidden group-hover:flex justify-between items-center absolute px-4 w-full bg-white py-1.5"
  >
    <span><i class="fa-regular fa-heart"></i></span>
    <div
      class="bg-[#6bb327] rounded-sm p-2 text-sm text-white addcart"
    >
      Add To Cart
    </div>
  </div>
</div>`;

  itemsList.insertAdjacentHTML("beforeend", html);
};

WATCH.forEach(function (data) {
  renderCart(data);
});
showcase.addEventListener("click", function (e) {
  if (e.target.classList.contains("subhead")) {
    const textcon = e.target.textContent.trim();
    subhead.forEach((g) => g.classList.add("text-gray-500"));
    e.target.classList.remove("text-gray-500");
    cartsgrid.innerHTML = "";
    mainCartArr.forEach(function (data) {
      let textData = Object.getOwnPropertyNames(data);
      if (textData[0] === textcon)
        Object.values(data)[0].forEach(function (data) {
          renderCart(data);
        });
    });
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

window.addEventListener("DOMContentLoaded", function () {
  const addCart = document.querySelectorAll(".addcart");
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
