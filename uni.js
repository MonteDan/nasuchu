const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("cart")) {
  console.log(urlParams.getAll("cart").length);
}
var count = document.getElementsByClassName("header__cart-count")[0];

function add(name) {
  urlParams.append("cart", name);
  console.log(urlParams.getAll("cart"));
  count.innerHTML = urlParams.getAll("cart").length;
  console.log(urlParams.toString());

  document.querySelectorAll(".lynk").forEach((link) => {
    var current = link.href;

    console.log(link.href);
  });
}
