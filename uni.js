const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("cart")) {
  console.log(urlParams.getAll("cart").length);
}
var count = document.getElementsByClassName("header__cart-count")[0];

function add(name) {
  urlParams.append("cart", name);
  console.log(urlParams.getAll("cart"));
  count.innerHTML = urlParams.getAll("cart").length;
  document.querySelectorAll(".lynk").forEach((link) => {
    let current = link.href;
    link.href = current + urlParams.toString();
  });
  console.log(window.location.search);
}
