var random_box = (function() {

  //cache
  var btn_randstr = document.getElementById("btn-randstr");
  var btn_randnum = document.getElementById("btn-randnum");

  //bind button click events
  btn_randstr.addEventListener("click", randomStr);
  btn_randnum.addEventListener("click", randomNum);

  function randomNum() {
    events.emit("onInput", Math.floor(Math.random() * (100 - 0 + 1)) + 0 );
  }
  function randomStr() {
    events.emit("onInput", Math.random().toString(36).substring(2, 7) );
  }

  //marked for highlighting always
  highlight_box.mark("random-box", false);

})();