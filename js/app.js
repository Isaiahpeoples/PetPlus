// ********** Products Menu Page JS ************
const menu = [
  {
    id: 1,
    title: "Cat Kibbler",
    category: "food",
    price: 22.99,
    img: "./images/item-1.jpeg",
    desc: `Premium cat food, crafted with high-quality ingredients to nourish your feline’s health, energy, and happiness. Cats love the taste! `,
  },
  {
    id: 2,
    title: "Hamster Cage",
    category: "cage",
    price: 32.99,
    img: "./images/item-2.jpg",
    desc: `Generously-sized hamster cage with multiple levels and accessories. Designed for active play, easy cleaning, and a stimulating environment for your pet. `,
  },
  {
    id: 3,
    title: "Chew Bone",
    category: "toy",
    price: 9.99,
    img: "./images/item-3.jpeg",
    desc: `This durable dog chew toy bone, made from tough, non-toxic material, offers hours of entertainment and promotes healthy teeth.`,
  },
  {
    id: 4,
    title: "Large Aquarium Tank",
    category: "fish tank",
    price: 109.99,
    img: "./images/item-4.jpg",
    desc: `Spacious large aquarium tank featuring crystal-clear glass and sleek design. Perfect for creating stunning aquatic environments and showcasing vibrant marine life. `,
  },
  {
    id: 5,
    title: "Wire Pet Cage",
    category: "cage",
    price: 34.99,
    img: "./images/item-5.jpeg",
    desc: `Durable, sleek pet cage, designed for comfort and safety, ensuring a cozy home for your pets. `,
  },
  {
    id: 6,
    title: "Scratching Post",
    category: "toy",
    price: 39.99,
    img: "./images/item-6.jpeg",
    desc: `Our cat scratching post offers endless fun and stimulation, allowing your feline to scratch, climb, and play, keeping them engaged.`,
  },
  {
    id: 7,
    title: "Medium Aquarium Tank",
    category: "fish tank",
    price: 49.99,
    img: "./images/item-7.png",
    desc: `A stylish medium-sized aquarium tank with a durable frame, secure lid, and ample space. Ideal for small fish and decoration.`,
  },
  {
    id: 8,
    title: "Fish Flakes",
    category: "food",
    price: 7.99,
    img: "./images/item-9.jpeg",
    desc: `These delicious fish flakes offer high nutritional value, promoting vibrant colors and health for your aquatic pets with every feeding.  `,
  },
  {
    id: 9,
    title: "Vitamin-packed Dog Food",
    category: "food",
    price: 26.99,
    img: "./images/item-8.jpeg",
    desc: `Premium healthy dog food made with natural ingredients, packed with essential nutrients. Supports vitality, shiny coats, and overall well-being for your furry friend. `,
  },
  {
    id: 10,
    title: "Retractable Leash",
    category: "leash",
    price: 14.99,
    img: "./images/item-10.jpeg",
    desc: `Adjustable pet leash with ergonomic handle, smooth retraction mechanism, and durable, tangle-free cord. Comfortable leisure strolls guranteed.`,
  },
  {
    id: 11,
    title: "Yarn Ball",
    category: "toy",
    price: 12.99,
    img: "./images/item-11.jpeg",
    desc: `This yarn ball is a game-changer! Vibrant colors, soft texture, and durable—perfect for hours of play and fun!`,
  },
];

// Populate hardcoded items using JS
const sectionCenter = document.querySelector(".menu-center");
const container = document.querySelector(".btn-container");

// Load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
            </div>
           </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};


// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});

