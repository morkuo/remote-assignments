function addClassOnEvent(event, fireElement, styleElement, helperClass) {
  fireElement.addEventListener(event, () => {
    styleElement.classList.toggle(helperClass);
  });
}

/*
 * extends A element when B elemenet is hovered over or clicked
 */

//items
const navItems = document.querySelectorAll("#items li");
navItems.forEach(list => {
  const triangleIcon = list.querySelector(".triangle_icon");
  if (triangleIcon) {
    addClassOnEvent("mouseenter", list, list, "item_extending");
    addClassOnEvent("mouseleave", list, list, "item_extending");
  }
});

//Hover展開內容自己維持自己展開
//Product
const itemProductDetail = document.querySelector("#item_product_detail");
const itemProduct = itemProductDetail.previousElementSibling;
const itemProductTriangleIcon = itemProduct.querySelector("img");

addClassOnEvent("mouseenter", itemProductDetail, itemProduct, "item_extending");
addClassOnEvent("mouseleave", itemProductDetail, itemProduct, "item_extending");

//Developer Communities
const itemDevComDetail = document.querySelector("#item_developer_communities_detail");
const itemDevCom = itemDevComDetail.previousElementSibling;
const itemDevComTriangleIcon = itemDevCom.querySelector("img");

addClassOnEvent("mouseenter", itemDevComDetail, itemDevCom, "item_extending");
addClassOnEvent("mouseleave", itemDevComDetail, itemDevCom, "item_extending");

//moreBtn
const moreBtn = document.querySelector("#items ul li:last-child");
const itemDeveloperProfile = moreBtn.previousElementSibling;
const moreBtnTriangleIcon = moreBtn.querySelector("img");

addClassOnEvent("mouseenter", moreBtn, itemDeveloperProfile, "item_extending");
addClassOnEvent("mouseleave", moreBtn, itemDeveloperProfile, "item_extending");
addClassOnEvent("mouseleave", itemDeveloperProfile, itemDeveloperProfile, "item_extending");

//click 展開內容保持展開狀態，點擊原按鈕或按鈕外元素才關閉
// search bar
const searchBar = document.querySelector("#search_bar");
const searchBarInputField = document.querySelector("#search_bar_input");
const searchBarClosePanel = document.querySelector("#search_bar_close_panel");

addClassOnEvent("click", searchBarInputField, searchBar, "search_bar_extending");
addClassOnEvent("click", searchBarClosePanel, searchBar, "search_bar_extending");

//language btn
const languageToggleBtns = document.querySelectorAll(".language_toggle_btn");
const navLanguageClosePanel = document.querySelector("#nav_language_close_panel");
const footerLanguageClosePanel = document.querySelector("#footer_language_close_panel");
const navLanguageBtn = document.querySelector("#nav_language");
const footerLanguageBtn = document.querySelector("#footer_language");

languageToggleBtns.forEach(btn => addClassOnEvent("click", btn, btn, "item_extending"));

addClassOnEvent("click", navLanguageClosePanel, navLanguageBtn, "item_extending");
addClassOnEvent("click", navLanguageClosePanel, navLanguageClosePanel, "item_extending");

addClassOnEvent("click", footerLanguageClosePanel, footerLanguageBtn, "item_extending");
addClassOnEvent("click", footerLanguageClosePanel, footerLanguageClosePanel, "item_extending");

// developer profile circle
const developerProfileCircle = document.querySelector("#developer_profile");
const developerProfileCircleDetail = developerProfileCircle.nextElementSibling;
const developerProfileCircleClosePanel = document.querySelector("#developer_profile_close_panel");

addClassOnEvent("click", developerProfileCircle, developerProfileCircleDetail, "item_extending");
addClassOnEvent("click", developerProfileCircleClosePanel, developerProfileCircleDetail, "item_extending");
