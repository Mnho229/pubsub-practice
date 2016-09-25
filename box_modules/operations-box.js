var operations_box = (function() {

    //cache
    var operationsText = document.getElementById("operations");

    //subscribe
    events.on("stringFound", operations_clear);
    events.on("numberFound", operations_compute);

    function operations_compute(value) {
        var sum = value + 324;
        operationsText.innerHTML = "The sum of " + value + " and 324 is " + sum;
    }

    function operations_clear(word) {
        operationsText.innerHTML = word + " ain't no number, fool.";
    }

})();