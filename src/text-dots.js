var textDots = function (numberOfDots) {
    "use strict";
    
    var dotsInterval = null,
        element = null,
        dot = ".",
        nbsp = "&nbsp;";

    if (typeof numberOfDots !== "undefined" && isNaN(numberOfDots)) {
        throw new TypeError("The numberOfDots must be a number");
    }

    numberOfDots = (typeof numberOfDots === "string" ? parseInt(numberOfDots, 10) : numberOfDots) || 3;

    clear = function () {
        clearInterval(dotsInterval);
        dotsInterval = null;
    },

    set = function (text) {
        element.innerHTML = txt;
    },

    start = function (text, el) {
        if (element === null && typeof el !== "object")
            throw new TypeError("The element passed in must be of type 'object'");
        }
        else if (typeof text !== "string" && typeof text !== "number") {
            throw new TypeError("The text passed in must be of type 'string' or 'number'");
        }

        if (el) {
            element = el;
        }

        clear();

        var mainText = text,
            counter = 0, 
            numDots = numberOfDots;
        
        while (numDots--) {
            mainText += nbsp;
        }

        dotsInterval = setInterval(function () {
            counter++;
            if (counter > numberOfDots) {
                counter = 0;
            }

            var newText = mainText;
            var i = counter;
            while (i--) {
                newText = newText.replace(nbsp, dot);
            }
            set(newText);
        }, 500);

        set(mainText);
    };

    return {
        "start": start,
        "clear": clear
    };
};