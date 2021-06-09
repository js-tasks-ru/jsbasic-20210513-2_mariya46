function toggleText() {
  let button = document.querySelector( '.toggle-text-button' );

  if( button ) {
    button.addEventListener( 'click', ()=>{
      let text = document.getElementById( 'text' );

      if( text ) {
        text.hidden = !text.hidden;
      }
    });
  }
}