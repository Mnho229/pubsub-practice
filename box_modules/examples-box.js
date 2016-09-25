var examples_box = (function() {

    //cache
    var examplesText = document.getElementById('examples');

    //subscribe
    events.on("stringFound", string_examples);
    events.on("numberFound", number_examples);

    function string_examples(data)
    {
        examplesText.innerHTML = "Firehouse, dogs, 10a, -";
    }
    function number_examples(data)
    {
        examplesText.innerHTML = "1, 400, 5, 347, 10101";
    }

})();