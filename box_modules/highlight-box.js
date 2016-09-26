var highlight_box = (function() {

    //cache
    var highlightbtn = document.getElementById('btn-highlight');

    //bind button click event
    highlightbtn.addEventListener("click", highlight_boxes);

    function highlight_boxes() {
        var rules = document.stylesheets[0].cssRules;

        var opacity;
        var last_time = +new Date();
        var tick = function() {

        }
    };

    // external function
    function mark(id, remove) {
        var toMark = document.getElementById(id);

        if (remove === true) {
            if ( toMark.classList.contains("highlight") ) {
                toMark.classList.remove("highlight");
            }
        }
        else {
            if ( !(toMark.classList.contains("highlight")) ) {
                toMark.classList.add("highlight");
            }
        }
    };

    //highlight box is always in use
    mark("highlighted-box", false);

    return {
        mark: mark
    };


})();