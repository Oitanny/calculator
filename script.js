let but1 = document.getElementById("1");
let but2 = document.getElementById("2");
let but3 = document.getElementById("3");
let but4 = document.getElementById("4");
let but5 = document.getElementById("5");
let but6 = document.getElementById("6");
let but7 = document.getElementById("7");
let but8 = document.getElementById("8");
let but9 = document.getElementById("9");
let but0 = document.getElementById("0");
let butp = document.getElementById("+");
let butm = document.getElementById("x");
let butd = document.getElementById("/");
let buts = document.getElementById("-");
let butEq = document.getElementById("=");
let res = document.getElementById("result");
let resPrev = document.getElementById("resultPrev");
function addToQuery(x) {
    let resVal = res.getAttribute("value");


    if (x != "CE" && x != "C" && x != "backspace" && x != "=") {
        if (resVal == "Error: Enter a valid input") {
            res.setAttribute("value", (x))

        }
        else if (x == "x")
            res.setAttribute("value", (resVal + "*"))
        else
            res.setAttribute("value", (resVal + x))

    }
    if (x == "=") {
        try {

            res.setAttribute("value", eval(resVal))
        }
        catch (e) {
            res.setAttribute("value", "Error: Enter a valid input")
            return
        }
        resPrev.setAttribute("value", resVal)


    }
    if (x == "C") {
        res.setAttribute("value", "")
        resPrev.setAttribute("value", "")

    }
    if (x == "CE") {
        res.setAttribute("value", "")
    }
    if (x == "backspace") {
        console.log(x)

        res.setAttribute("value", resVal.substring(0, resVal.length - 1))
    }
}
