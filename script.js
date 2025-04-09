// js phần account
//js khi click vào icon sẽ hiện menu
const accountIcon = document.querySelector(".accountIcon");
const accountMenu = document.querySelector(".accountMenu");
accountIcon.addEventListener("click", function () {
  accountMenu.style.display =
    accountIcon.style.display === "block" ? "none" : "block";
});
//js để khi click ra ngoài icon menu sẽ mất
document.addEventListener("click", function (event) {
  if (
    !accountIcon.contains(event.target) &&
    !accountMenu.contains(event.target)
  ) {
    accountMenu.style.display = "none";
  }
});
// hết phần account icon
