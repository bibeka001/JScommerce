const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./Image/sliderimg2.jpg",
      },
      {
        code: "darkblue",
        img: "./Image/blazer.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 130,
    colors: [
      {
        code: "black",
        img: "./Image/blazer.jpg",
      },
      {
        code: "darkblue",
        img: "./Image/blazer.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "",
    price: 109,
    colors: [
      {
        code: "black",
        img: "./Image/crater.jpg",
      },
      {
        code: "darkblue",
        img: "./Image/blazer.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./Image/sliderimg2.jpg",
      },
      {
        code: "darkblue",
        img: "./Image/blazer.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 120,
    colors: [
      {
        code: "black",
        img: "./Image/sliderimg2.jpg",
      },
      {
        code: "darkblue",
        img: "./Image/blazer.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];
const currentProdcutImg = document.querySelector(".prodcutImg");
const currentProdcutTitle = document.querySelector(".prodcuttitle");
const currentProdcutPrice = document.querySelector(".prodcutPrice");
const currentProdcutColors = document.querySelectorAll(".color");
const currentProdcutSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("you clicked!" + index);

    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //chnage texts of currentProcut
    currentProdcutTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0];
  });
});
