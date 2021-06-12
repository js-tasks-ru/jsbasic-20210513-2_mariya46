function hideSelf() {
  let buttonHide = document.querySelector('.hide-self-button');
  buttonHide.addEventListener('click', function() {
    buttonHide.setAttribute('hidden', 'hidden');
    }
  );
}
