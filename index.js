
console.log("hello");
function minaraiShowChat(){
  var container = document.querySelector("#minarai-chat-container");
  container.classList.toggle('opend');

  var button = document.querySelector("#minarai-icon-circle");
  button.classList.toggle('invisible');
}



/**  **/
function minaraiOnIconClick(){
  minaraiShowChat();
}

function minaraiOnHideClick(){
  minaraiShowChat();
}
