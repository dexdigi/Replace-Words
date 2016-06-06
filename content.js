var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

//i'm sure there's a more elegant way to do all of this stuff but whatever, this works idc

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Transcended Race/g, "Was Retroactively Deemed Safe by White People");
            replacedText = replacedText.replace(/Transcended race/g, "was retroactively deemed safe by white people");
            replacedText = replacedText.replace(/transcended race/g, "was retroactively deemed safe by white people");
            replacedText = replacedText.replace(/Transcends Race/g, "Was Retroactively Deemed Safe by White People");
            replacedText = replacedText.replace(/transcends race/g, "was retroactively deemed safe by white people");
            replacedText = replacedText.replace(/transcending race/g, "being retroactively deemed safe by white people");
            replacedText = replacedText.replace(/transcending racial/g, "being retroactively deemed safe by white people");
            replacedText = replacedText.replace(/Transcend Race/g, "be retroactively deemed safe by white people");
            replacedText = replacedText.replace(/transcend race/g, "be retroactively deemed safe by white people");


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}