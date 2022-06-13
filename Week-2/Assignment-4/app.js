/*
 * Click 'Welcome Message' block to change its inner text
 */

const msgBlock = document.querySelector(".msg");
const msg = msgBlock.querySelector("p");
msgBlock.addEventListener("click", () => {
  msg.textContent = "Have a Good Time!";
});

/*
 * Click 'Call to Action' button to show more content boxes
 */

const contentButton = document.querySelector(".content_btn button");
const contentBoxes2 = document.getElementById("content_boxes_2");

contentButton.addEventListener("click", () => {
  contentBoxes2.style.display = "flex";
});
