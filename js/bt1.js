function CalMark() {
    var markAverage = Number(document.getElementById("inpA").value);
    var markA = Number(document.getElementById("inpM1").value);
    var markB = Number(document.getElementById("inpM2").value);
    var markC = Number(document.getElementById("inpM3").value);

    var Area = DeterAre();
    var Ob = DeterOb();
    var result = "";
    var markTotal = markA + markB + markC + Area + Ob;
    if (markA == 0 || markB == 0 || markC == 0) {
        result = "Bạn đã rớt vì 1 trong 3 môn < 0!"
    }
    else {
        if (markTotal >= markAverage) {
            result = "Chúc mừng bạn! Bạn đã đậu với số điểm: " + markTotal;
        }
        else {
            result = "Tiếc quá! Bạn đã rớt với số điểm: " + markTotal;
        }
    }
    document.getElementById("txtMark").innerHTML = result;

}

function DeterAre() {
    var Area = document.getElementById("SelectArea").value;
    var x = 0;
    switch (Area) {
        case "A":
            x = 2;
            break;
        case "B":
            x = 1;
            break;
        case "C":
            x = 0.5;
            break;
        default: x = 0;
    }
    return Number(x);
}

function DeterOb() {
    var Ob = document.getElementById("SelectOb").value;
    var y = 0;
    switch (Ob) {
        case "1":
            y = 2.5;
            break;
        case "2":
            y = 1.5;
            break;
        case "3":
            y = 1;
            break;
        default: y = 0;
    }
    return Number(y);

}
document.getElementById("btnMark").onclick = CalMark;