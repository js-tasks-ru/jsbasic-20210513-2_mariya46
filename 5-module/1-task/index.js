function hideSelf() {
  addEventListener("click", function () {
    let buttonHide = document.getElementsByClassName('hide-self-button');
    buttonHide[0].setAttribute("hidden", "");
  });
}