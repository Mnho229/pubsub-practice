var highlight_box = (function() {

    //cache
    var highlightbtn = document.getElementById('btn-highlight');

    //bind button click event
    highlightbtn.addEventListener("click", highlightFunc);

    //function that highlights the elements
    function highlightFunc() {
        var els = document.getElementsByClassName('highlight');

        var opacity = 0;
        var back_to_zero_flag = false;
        
        var tick = function() {

            if (opacity === 1 || opacity > 1) {
                back_to_zero_flag = true;

            }

            if ( opacity <= 0 && back_to_zero_flag) {
                return;
            }

            if (!back_to_zero_flag) {
                opacity += 0.05;
            }
            else {
                opacity -= 0.05;
            }

            for (var i = 0; i < els.length; i++) {
                els[i].style["border-top"] = "6px solid rgba(0,255,0," + opacity + ")";
                //els[i].style["border-bottom"] = "6px solid rgba(0,255,0," + opacity + ")";
            }
            
            window.requestAnimationFrame(tick);

        }

        tick();

    };

    // external function
    function mark(id, remove) {
        var to_mark = document.getElementById(id);

        if (remove === true) {
            if ( to_mark.classList.contains("highlight") ) {
                to_mark.classList.remove("highlight");
            }
        }
        else {
            if ( !(to_mark.classList.contains("highlight")) ) {
                to_mark.classList.add("highlight");
            }
        }
    };

    //highlight box is always in use
    mark("highlighted-box", false);

    return {
        mark: mark
    };


})();