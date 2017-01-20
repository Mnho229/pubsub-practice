var history_box = (function() {

  //cache
  var past_terms = [];
  var term_element = document.getElementById('terms');

  //subscribe
  events.on("onInput", record);

  function record(term)
  {
    past_terms.push(term);
    term_element.insertAdjacentHTML('beforeend', "<br>" + past_terms[past_terms.length - 1]);

  }

  //marked for highlighting always
  highlight_box.mark("history-box", false);


})();