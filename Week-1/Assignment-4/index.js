// rotate triangle icons
const navItems = document.querySelectorAll("#items li");
navItems.forEach(list => {
  const triangleIcon = list.querySelector(".triangle_icon");
  if (triangleIcon) {
    list.addEventListener("mouseenter", () => {
      triangleIcon.classList.toggle("triangle_icon_rotation");
    });
    list.addEventListener("mouseleave", () => {
      triangleIcon.classList.toggle("triangle_icon_rotation");
    });
  }
});

//Change color when the element is hovered over
//language btns
const languageToggleBtns = document.querySelectorAll(".language_toggle_btn");
languageToggleBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#f0f1f4";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "white";
  });
});

//developer profile
const developerProfile = document.querySelector("#developer_profile");
developerProfile.addEventListener("mouseenter", () => {
  developerProfile.style.backgroundColor = "#f0f1f4";
});

developerProfile.addEventListener("mouseleave", () => {
  developerProfile.style.backgroundColor = "white";
});

//account profile
const accountProfile = document.querySelector("#account_profile");
accountProfile.addEventListener("mouseenter", () => {
  accountProfile.style.border = "2px solid rgba(174, 197, 243, 0.941)";
});

accountProfile.addEventListener("mouseleave", () => {
  accountProfile.style.border = "none";
});

// extend search bar when it is clicked
const searchBar = document.querySelector("#search_bar");
const searchBarInputField = document.querySelector("#search_bar_input");
const searchBarClosePanel = document.querySelector("#search_bar_close_panel");
searchBarInputField.addEventListener("click", () => {
  searchBar.classList.toggle("search_bar_extending");
});

searchBarClosePanel.addEventListener("click", () => {
  searchBar.classList.toggle("search_bar_extending");
});

/* extends items' menu when it is hovered over */
//items
navItems.forEach(list => {
  const triangleIcon = list.querySelector(".triangle_icon");
  if (triangleIcon) {
    list.addEventListener("mouseenter", () => {
      list.classList.toggle("item_extending");
    });
    list.addEventListener("mouseleave", () => {
      list.classList.toggle("item_extending");
    });
  }
});

//language bar
const navLanguageClosePanel = document.querySelector("#nav_language_close_panel");
const footerLanguageClosePanel = document.querySelector("#footer_language_close_panel");
languageToggleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("item_extending");
  });
});

navLanguageClosePanel.addEventListener("click", () => {
  const extendingBtn = document.querySelector("#nav_language");
  extendingBtn.classList.toggle("item_extending");
  navLanguageClosePanel.classList.toggle("item_extending");
});

footerLanguageClosePanel.addEventListener("click", e => {
  const extendingBtn = document.querySelector("#footer_language");
  extendingBtn.classList.toggle("item_extending");
  footerLanguageClosePanel.classList.toggle("item_extending");
});

//Hover展開內容自己維持自己展開
//Product
const itemProductDetail = document.querySelector("#item_product_detail");
const itemProduct = itemProductDetail.previousElementSibling;
const itemProductTriangleIcon = itemProduct.querySelector("img");
itemProductDetail.addEventListener("mouseenter", () => {
  itemProduct.classList.toggle("item_extending");
  itemProductTriangleIcon.classList.toggle("triangle_icon_rotation");
});
itemProductDetail.addEventListener("mouseleave", () => {
  itemProduct.classList.toggle("item_extending");
  itemProductTriangleIcon.classList.toggle("triangle_icon_rotation");
});

//Developer Communities
const itemDevComDetail = document.querySelector("#item_developer_communities_detail");
const itemDevCom = itemDevComDetail.previousElementSibling;
const itemDevComTriangleIcon = itemDevCom.querySelector("img");
itemDevComDetail.addEventListener("mouseenter", () => {
  itemDevCom.classList.toggle("item_extending");
  itemDevComTriangleIcon.classList.toggle("triangle_icon_rotation");
});
itemDevComDetail.addEventListener("mouseleave", () => {
  itemDevCom.classList.toggle("item_extending");
  itemDevComTriangleIcon.classList.toggle("triangle_icon_rotation");
});

//moreBtn
const moreBtn = document.querySelector("#items ul li:last-child");
const itemDeveloperProfile = moreBtn.previousElementSibling;

moreBtn.addEventListener("mouseenter", () => {
  itemDeveloperProfile.classList.toggle("item_extending");
});

moreBtn.addEventListener("mouseleave", () => {
  itemDeveloperProfile.classList.toggle("item_extending");
});

itemDeveloperProfile.addEventListener("mouseenter", () => {
  itemDeveloperProfile.classList.toggle("item_extending");
});

itemDeveloperProfile.addEventListener("mouseleave", () => {
  itemDeveloperProfile.classList.toggle("item_extending");
});

/* developer profile circle */
const developerProfileCircle = document.querySelector("#developer_profile");
const developerProfileCircleDetail = developerProfileCircle.nextElementSibling;
const developerProfileCircleClosePanel = document.querySelector("#developer_profile_close_panel");

developerProfileCircle.addEventListener("click", () => {
  developerProfileCircleDetail.classList.toggle("item_extending");
});

developerProfileCircleClosePanel.addEventListener("click", () => {
  developerProfileCircleDetail.classList.toggle("item_extending");
});
