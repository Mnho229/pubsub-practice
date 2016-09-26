var sentences_box = (function() {

    //cache
    var sentencesText1 = document.getElementById("sentences1");
    var sentencesText2 = document.getElementById("sentences2");
    var sentencesText3 = document.getElementById("sentences3");

    //subscribe
    events.on("stringFound", compose_sentences);
    events.on("numberFound", clear_sentences);

    function compose_sentences(word) {
        sentencesText1.innerHTML = "There's no other string that I love other than " + word;
        sentencesText2.innerHTML = word + " is all the rage lately with these modules.  Some are being hipsters about it.";
        sentencesText3.innerHTML = "Type another string qualifier like " + word + " and you see more of these lovely filler sentences.";
        highlight_box.mark("sentences-box", false);
    }

    function clear_sentences(number) {
        sentencesText1.innerHTML = number + " is more of a number really.";
        sentencesText2.innerHTML = "";
        sentencesText3.innerHTML = "";
        highlight_box.mark("sentences-box", true);
    }


})();