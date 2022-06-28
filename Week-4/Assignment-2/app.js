function ajax(src, callback) {
  fetch(src)
    .then(res => res.json())
    .then(callback);
}

// document.createElement() and appendChild() methods are preferred.
function render(data) {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  body.appendChild(container);

  for (let item of data) {
    const itemBox = document.createElement('div');
    container.appendChild(itemBox);

    for (let itemDetail of Object.values(item)) {
      const paragraph = document.createElement('p');
      paragraph.innerText = itemDetail;
      itemBox.appendChild(paragraph);
    }
  }
}

// you should get product information in JSON format and render data in the page
ajax('https://appworks-school.github.io/Remote-Aassigiment-Data/products', function (response) {
  render(response);
});
