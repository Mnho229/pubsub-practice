var type_detect = (function() {

    //cache
    var boxText = document.getElementById("announce-type");

    //subscribe
    events.on("onInput", announce_type);

    //When onInput is emitted, check and then emit type
    function announce_type(input) {

        console.log(input + ": " + typeof(input));

        if ( isNaN(Number(input)) )
        {
            boxText.innerHTML = "This is a String!";
            events.emit("stringFound", Number(input));
        }
        else
        {
            boxText.innerHTML = "This is a Number!";
            events.emit("numberFound", input);
        }
    }

})();