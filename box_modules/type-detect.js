var type_detect = (function() {

    //cache
    var boxText = document.getElementById("announce-type");

    //subscribe
    events.on("onInput", announce_type);

    //When onInput is emitted, check and then emit type
    function announce_type(input) {

        highlight_box.mark("type-detection-box", false);

        if ( isNaN(Number(input)) )
        {
            boxText.innerHTML = "This is a String!";
            events.emit("stringFound", input);
        }
        else
        {
            boxText.innerHTML = "This is a Number!";
            events.emit("numberFound", Number(input));
        }
    }

})();