var input_box = (function() {

    //cache
    var inbox = document.getElementById('inbox');

    //bind keypress event
    inbox.addEventListener('keydown', function(e) {

        if (e.which === 13)
        {
            events.emit("onInput", inbox.value);
            inbox.value = "";
        }

    });

    //marked for highlighting always
    highlight_box.mark("input-box", false);

})();