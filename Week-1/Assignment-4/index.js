// rotate triangle icons
const navItems = document.querySelectorAll("#items li.item");
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

//展開內容自己維持自己展開
//Product
const itemProductDetail = document.querySelector("#item_product_detail");
const itemProduct = itemProductDetail.previousElementSibling;
const triangleIcon = itemProduct.querySelector("img");
itemProductDetail.addEventListener("mouseenter", () => {
  itemProduct.classList.toggle("item_extending");
  triangleIcon.classList.toggle("triangle_icon_rotation");
});
itemProductDetail.addEventListener("mouseleave", () => {
  itemProduct.classList.toggle("item_extending");
  triangleIcon.classList.toggle("triangle_icon_rotation");
});

//moreBtn toggle
const moreBtn = navItems[navItems.length - 1];
moreBtn.addEventListener("mouseenter", () => {
  const listNotShowing = [];
  navItems.forEach((list, index) => {
    if (index !== navItems.length - 1) {
      if (!list.classList.contains("showing")) {
        listNotShowing.push(list.textContent);
      }
    }
  });
});
