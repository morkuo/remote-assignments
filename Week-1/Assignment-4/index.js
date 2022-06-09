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

const navItemsMore = document.querySelector("#items_more");
const navItemsMoreImg = navItemsMore.querySelector("img");
navItemsMore.addEventListener("mouseenter", () => {
  navItemsMoreImg.classList.toggle("triangle_icon_rotation");
});
navItemsMore.addEventListener("mouseleave", () => {
  navItemsMoreImg.classList.toggle("triangle_icon_rotation");
});

const languageToggleBtns = document.querySelectorAll(".language_toggle_btn");
languageToggleBtns.forEach(btn => {
  const triangleIcon = btn.querySelector(".triangle_icon");
  btn.addEventListener("mouseenter", () => {
    triangleIcon.classList.toggle("triangle_icon_rotation");
  });
  btn.addEventListener("mouseleave", () => {
    triangleIcon.classList.toggle("triangle_icon_rotation");
  });
});

// change background color or add border when hover over certain element
// search bar
const searchBar = document.querySelector("#search_bar");
const searchBarInputField = searchBar.querySelector("input");

searchBar.addEventListener("mouseenter", () => {
  searchBar.style.backgroundColor = "#e9eaec";
  searchBarInputField.style.backgroundColor = "#e9eaec";
});

searchBar.addEventListener("mouseleave", () => {
  searchBar.style.backgroundColor = "#f1f3f4";
  searchBarInputField.style.backgroundColor = "#f1f3f4";
});

//language btns
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
searchBarInputField.addEventListener("click", () => {
  searchBar.classList.toggle("search_bar_extending");
});
